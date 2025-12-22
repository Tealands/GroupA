const isTest = process.env.VITEST === 'true' || process.env.NODE_ENV === 'test';

export default {
  plugins: Object.assign({},
    // Only load Tailwind's postcss plugin during dev/build, not during unit tests
    // Use the official PostCSS plugin for Tailwind
    !isTest ? { '@tailwindcss/postcss': {} } : {},
    // Note: this requires installing '@tailwindcss/postcss'
    { autoprefixer: {} }
  ),
}
