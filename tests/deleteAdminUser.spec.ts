import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Admin Module Tests', () => {

  
        test('Delete Existing User', async ({ page }) => {
  
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
  
     //Delete user
      await adminPage.adminDelete();

    });

});