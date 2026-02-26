//command :npx playwright codegen [To Auomatically Cerate Test]
//This Test Generate by Codegen
import { test, expect } from '@playwright/test';

test('Code By Codegen', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});


//npx playwright codegen --output tests/MyTest.spec.js
//npx playwright codegen --target javascript(lang)
//npx playwright codegen -b chromium (browser)
//npx playwright codegen --device 'iPhone 13' [to Run on specific device/simulators]
//npx playwright codegen  --viewport-size '1230,710';


