import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // exclude E2E/playwright tests and node_modules from unit test runner
    exclude: ['node_modules/**', '**/*.spec.ts'],
    setupFiles: './vitest.setup.js',
    environment: 'jsdom',
    globals: true,
  },
});
