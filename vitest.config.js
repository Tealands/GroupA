import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // exclude E2E/playwright tests and node_modules from unit test runner
    exclude: ['tests/**', 'node_modules/**'],
    setupFiles: './vitest.setup.js',
    environment: 'jsdom',
    globals: true,
  },
});
