import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';
dotenv.config();

const authFile = './src/auth/auth.json';

setup('authenticate', async ({ page }) => {

  const loginPage = new LoginPage(page);  
  const username = process.env.USERNAME;
 const password = process.env.PASSWORD;
 await loginPage.navigateToLoginPage();
  await page.waitForLoadState('domcontentloaded');
  await loginPage.enterUsername(process.env.APP_USERNAME!);

  await loginPage.enterPassword(process.env.APP_PASSWORD!);

  await loginPage.clickLogin();
  
  // Verify login succeeded
  await expect(page).toHaveURL(/dashboard/);

  // Save authentication state
  await page.context().storageState({
    path: authFile,
  });
});