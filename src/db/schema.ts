/**
 * DB スキーマ定義と初期化ヘルパー（D1 用）
 *
 * テーブル:
 * - publishers: 出版社情報
 * - authors: 著者情報
 * - media: AniList の Media（マンガ／書籍等）のメタ
 * - media_authors: media <-> authors の関連
 * - volumes: 各巻（出版日やISBN）
 * - media_publishers: media <-> publisher の関連
 * - media_genres: media のジャンルリスト
 * - media_tags: media のタグリスト
 *
 * 使い方:
 * ワーカー起動時に D1 バインディングを渡して `initSchema(env.DB)` を呼ぶと
 * 必要なテーブルを `CREATE TABLE IF NOT EXISTS` で作成します。
 */

export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS publishers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  anilist_id INTEGER,
  name TEXT NOT NULL UNIQUE,
  site_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  anilist_id INTEGER,
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  anilist_id INTEGER NOT NULL UNIQUE,
  title_romaji TEXT,
  title_english TEXT,
  title_native TEXT,
  format TEXT,
  status TEXT,
  description TEXT,
  episodes INTEGER,
  chapters INTEGER,
  volumes INTEGER,
  averageScore INTEGER,
  meanScore INTEGER,
  siteUrl TEXT,
  coverImage_extraLarge TEXT,
  coverImage_large TEXT,
  coverImage_medium TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media_authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  media_id INTEGER NOT NULL REFERENCES media(id) ON DELETE CASCADE,
  author_id INTEGER NOT NULL REFERENCES authors(id) ON DELETE CASCADE,
  role TEXT,
  UNIQUE(media_id, author_id, role)
);

CREATE TABLE IF NOT EXISTS volumes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  media_id INTEGER NOT NULL REFERENCES media(id) ON DELETE CASCADE,
  volume_number INTEGER,
  title TEXT,
  published_at DATE,
  isbn TEXT,
  cover_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(media_id, volume_number)
);

CREATE TABLE IF NOT EXISTS media_publishers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  media_id INTEGER NOT NULL REFERENCES media(id) ON DELETE CASCADE,
  publisher_id INTEGER NOT NULL REFERENCES publishers(id) ON DELETE CASCADE,
  UNIQUE(media_id, publisher_id)
);

CREATE TABLE IF NOT EXISTS media_genres (
  media_id INTEGER NOT NULL REFERENCES media(id) ON DELETE CASCADE,
  genre TEXT NOT NULL,
  PRIMARY KEY(media_id, genre)
);

CREATE TABLE IF NOT EXISTS media_tags (
  media_id INTEGER NOT NULL REFERENCES media(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  PRIMARY KEY(media_id, tag)
);

CREATE INDEX IF NOT EXISTS idx_media_anilist_id ON media(anilist_id);
CREATE INDEX IF NOT EXISTS idx_volumes_isbn ON volumes(isbn);
`;

/**
 * D1 データベースに対してスキーマを適用するヘルパー。
 * 引数の `db` は D1 バインディング（例: `env.DB`）を想定。
 */
export async function initSchema(db: any) {
  const stmts = SCHEMA_SQL.split(/;\s*\n/).map(s => s.trim()).filter(Boolean);
  for (const stmt of stmts) {
    try {
      await db.prepare(stmt).run();
    } catch (e) {
      console.error('initSchema error:', e?.toString?.() ?? String(e), 'statement:', stmt.slice(0, 80));
    }
  }
}

export default {
  SCHEMA_SQL,
  initSchema,
};
