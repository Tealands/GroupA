import { test, expect } from '@playwright/test';

test('RecommendedManga is visible', async ({ page }) => {
  page.on('console', async (msg) => {
    console.log('PAGE CONSOLE>', msg.type(), msg.text(), msg.location());
    for (const a of msg.args()) {
      try {
        const val = await a.jsonValue();
        console.log('PAGE CONSOLE ARG JSON>', val);
      } catch (err) {
        try {
          const obj = await a.evaluate((o: any) => ({ message: o?.message, stack: o?.stack }));
          console.log('PAGE CONSOLE ARG EVAL>', obj);
        } catch (e) {
          console.log('PAGE CONSOLE ARG UNREADABLE', e);
        }
      }
    }
  });
  await page.goto('/');
  // give the app a moment to render / error overlay to appear
  await page.waitForTimeout(500);
  // dump full HTML and take a screenshot to help debugging when element not found
  const html = await page.content();
  console.log('PAGE HTML (full):', html);
  await page.screenshot({ path: 'test-artifacts/recommended.png', fullPage: true });

  await expect(page.getByText('おすすめの漫画')).toBeVisible();
  // check at least one manga card image exists
  const img = page.locator('img').first();
  await expect(img).toBeVisible();
});
