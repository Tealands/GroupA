import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

const ANILIST_GQL_ENDPOINT = 'https://graphql.anilist.co'

const MEDIA_QUERY = `query ($id: Int) {
  Media(id: $id) {
    id
    title { romaji english native }
    format
    status
    description
    episodes
    chapters
    volumes
    averageScore
    meanScore
    siteUrl
    coverImage { extraLarge large medium }
    genres
    tags { name }
  }
}`

app.get('/api/anilist/:id', async (c) => {
  const id = Number(c.req.param('id'))
  if (!Number.isFinite(id)) {
    return c.json({ error: 'id must be a number' }, 400)
  }

  try {
    const res = await fetch(ANILIST_GQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: MEDIA_QUERY, variables: { id } }),
    })

    const json = await res.json()
    if (!res.ok) {
      return c.json({ error: 'AniList request failed', details: json }, 502)
    }

    return c.json(json)
  } catch (err) {
    return c.json({ error: err?.message ?? String(err) }, 500)
  }
})

// スキーマ初期化ヘルパーを呼ぶ（初回リクエスト時に一度だけ実行）
import schemaModule from '../src/db/schema'
const { initSchema } = schemaModule

let initPromise = null
async function ensureInit(env) {
  if (initPromise) return initPromise
  initPromise = (async () => {
    try {
      if (env && env.DB) {
        await initSchema(env.DB)
        console.log('DB schema init completed')
      } else {
        console.warn('env.DB not found — skipping schema init')
      }
    } catch (e) {
      console.error('schema init failed:', e)
    }
  })()
  return initPromise
}

export default async function fetch(request, env, ctx) {
  await ensureInit(env)
  return app.fetch(request, env, ctx)
}
