import { Page, expect } from "@playwright/test";
export class DashboardPage{
    constructor(private page:Page){}
     // Locators
  userDropdown = '.oxd-userdropdown-tab';
  userNameLocator = 'p.oxd-userdropdown-name';

  logoutButton = 'text=Logout';

  loginHeading = 'h5';
   // Methods

  async clickUserDropdown() {

    await this.page.locator(this.userDropdown)
      .click();
  }

  // New method to get logged-in user's name
    async getLoggedInUserName(): Promise<string> {
        const userName = await this.page
            .locator(this.userNameLocator)
            .textContent();
        
        return userName?.trim() || '';
    }

  async clickLogout() {

    await this.page
      .getByRole('menuitem', {
        name: 'Logout'
      })
      .click();
  }

  async logout() {

    await this.clickUserDropdown();

    await this.clickLogout();
  }

  async verifyLogoutSuccessful() {

    await expect(
      this.page.locator(this.loginHeading)
    ).toContainText('Login');
  }
}