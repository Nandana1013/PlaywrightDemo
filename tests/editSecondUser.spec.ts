import { test } from '@playwright/test';

//import { LoginPage } from '../pages/LoginPage';

import { AdminPage } from '../pages/AdminPage';

test('Edit second user', async ({ page }) => {

  // Navigate to page with session loaded
  await page.goto('/');

  const adminPage = new AdminPage(page);

  await adminPage.clickAdminMenu();

  await adminPage.editSecondUser('Ntest1');

});