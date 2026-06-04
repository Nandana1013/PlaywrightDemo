import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { AdminPage } from '../pages/AdminPage';

test.describe('Search User Tests', () => {

   test('Search Existing User',
    async ({ page }) => {

      // Navigate to page with session loaded
    await page.goto('/');

    const adminPage = new AdminPage(page);

    // Navigate to Admin module
    await adminPage.clickAdminMenu();

    // Search user
    await adminPage.searchUser('testadmin120');

    // Verify user exists
    await adminPage.verifyUserExists(
      'testadmin120'
    );

  });

});