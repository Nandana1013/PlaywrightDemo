import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { url } from 'node:inspector';

test('OrangeHRM Login Test', async ({ page }) => {

  console.log(process.env.APP_USERNAME);
  console.log(process.env.APP_PASSWORD);

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.enterUsername(process.env.APP_USERNAME!);

  await loginPage.enterPassword(process.env.APP_PASSWORD!);

  await loginPage.clickLogin();

  await expect(page)
    .toHaveURL(/dashboard/);
    console.log(url);

});