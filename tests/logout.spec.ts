import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { DashboardPage } from '../pages/DashboardPage';

test.describe('Dashboardlogout Tests', () => {

    test('Logout Test', async ({ page }) => {

     // Navigate to app - session is automatically loaded by playwright.config.ts
    await page.goto('/');

    const dashboardPage = new DashboardPage(page);

    await dashboardPage.logout();

    await dashboardPage.verifyLogoutSuccessful();

  });

});