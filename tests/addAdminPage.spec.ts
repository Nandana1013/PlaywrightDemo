import { test } from '@playwright/test';
import { AdminPage } from '../pages/AdminPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Admin Module Tests', () => {

  
  test('Add Admin User', async ({ page }) => {

    // Navigate to app - session is automatically loaded by playwright.config.ts
    await page.goto('/');
    const dashboardPage = new DashboardPage(page);
    
    // Get logged-in user's name dynamically
    const loggedInUser = await dashboardPage.getLoggedInUserName();
    console.log('Logged-in user:', loggedInUser);

    const adminPage = new AdminPage(page);
    
    await adminPage.clickAdminMenu();

    // Click Add
    await adminPage.clickAddButton();
    //select user role
    await adminPage.selectUserRole('Admin');
    // Fill details
    await adminPage.enterEmployeeName(loggedInUser);
    //select status
    await adminPage.selectStatus('Enabled');

    await adminPage.enterUsername(
      'testadmin120'
    );

    await adminPage.enterPassword(
      'Admin@123'
    );

    await adminPage.enterConfirmPassword(
      'Admin@123'
    );

    // Save
    await adminPage.clickSave();

  });

});