import { expect, Page } from '@playwright/test';

export class AdminPage {

  constructor(private page: Page) {}

  // Locators

  //adminMenu = 'a[href="/web/index.php/admin/viewAdminModule"]';

  addButton = 'button:has-text("Add")';
  employeeNameInput = 'input[placeholder="Type for hints..."]';
  usernameInput = '.oxd-form input.oxd-input';
  passwordInput = 'input[type="password"]';
  saveButton = 'button[type="submit"]';
  searchUsernameInput = 'input.oxd-input.oxd-input--active';
  searchButton = 'button:has-text("Search")';
  resultTable = '.oxd-table-body';
  admindeletebutton = '.oxd-icon bi-trash';

  // Methods

  async clickAdminMenu() {

     await this.page
    .locator('//span[text()="Admin"]')
    .click();
  }

  async clickAddButton() {

    await this.page.locator(this.addButton)
      .click();
  }

  async selectUserRole(role: string) {

  await this.page
    .locator('.oxd-select-text')
    .nth(0)
    .click();

  await this.page
    .getByRole('option', {
      name: role
    })
    .click();
}

async enterEmployeeName(employeeName: string) {

  await this.page
    .locator('input[placeholder="Type for hints..."]')
    .fill(employeeName);

  const firstOption = this.page
    .locator('.oxd-autocomplete-option')
    .filter({
      hasText: employeeName
    })
    .first();

  await firstOption.waitFor();

  await firstOption.click();

}
  async selectStatus(status: string) {

  await this.page
    .locator('.oxd-select-text')
    .nth(1)
    .click();

  await this.page
    .getByRole('option', {
      name: status
    })
    .click();
}

  async enterUsername(username: string) {

    await this.page
      .locator('input').nth(2)
      .fill(username);
  }

  async enterPassword(password: string) {

    await this.page
      .locator(this.passwordInput)
      .nth(0)
      .fill(password);
  }

  async enterConfirmPassword(password: string) {

    await this.page
      .locator(this.passwordInput)
      .nth(1)
      .fill(password);
  }

  async clickSave() {

    await this.page
      .locator(this.saveButton)
      .click();
  }
async searchUser(username: string) {

  // Username search textbox
  const usernameField = this.page.locator(
    'div.oxd-form-row div input.oxd-input'
  ).first();

  await usernameField.click();
  await usernameField.fill(username);

  // Click Search button
  await this.page
    .getByRole('button', { name: 'Search' })
    .click();

  // Wait for table refresh
  await this.page.waitForLoadState('networkidle');
}

async verifyUserExists(username: string) {

  const matchingRow = this.page.locator(
    '.oxd-table-card',
    {
      hasText: username
    }
  );

  await expect(matchingRow).toBeVisible();
}

async editSecondUser(newUsername: string) {

  const secondRow = this.page
    .locator('.oxd-table-body .oxd-table-card')
    .nth(1);

  await secondRow
    .locator('button')
    .last()   // edit button
    .click();

  const usernameInput = this.page
    .locator('input')
    .nth(2);

  await usernameInput.fill(newUsername);

  await this.page
    .getByRole('button', { name: 'Save' })
    .click();
}

async adminDelete(){
  await this.page.locator(this.admindeletebutton).click();
}
 
}