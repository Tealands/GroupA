const isTest = process.env.VITEST === 'true' || process.env.NODE_ENV === 'test';

export default {
  plugins: Object.assign({},
    // Only load Tailwind's postcss plugin during dev/build, not during unit tests
    !isTest ? { '@tailwindcss/postcss': {} } : {},
    { autoprefixer: {} }
  ),
}
