import { Page, expect } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }
    
    // Locators
  usernameInput = 'input[name="username"]';

  passwordInput = 'input[name="password"]';

  loginButton = 'button[type="submit"]';

  dashboardHeader = '//h6[text()="Dashboard"]'
  
  errorMessage = '.oxd-alert-content-text';
 
  // Actions

  async navigateToLoginPage() {
   await this.page.goto('/');
  }

  async enterUsername(username: string) {

    await this.page.locator(this.usernameInput)
      .fill(username);
  }
  async enterPassword(password: string) {

    await this.page.locator(this.passwordInput)
      .fill(password);
  }

    async clickLogin() {

    await this.page.locator(this.loginButton)
      .click();
  }

  async login(username: string, password: string) {

    await this.enterUsername(username);

    await this.enterPassword(password);

    await this.clickLogin();
  }

  async verifySuccessfulLogin() {

    await expect(
      this.page.locator(this.dashboardHeader)
    ).toBeVisible();

    
  }

  async verifyInvalidLogin(){
    await expect(
      this.page.locator(this.errorMessage)
    ).toContainText('Invalid credentials');
  }
}

