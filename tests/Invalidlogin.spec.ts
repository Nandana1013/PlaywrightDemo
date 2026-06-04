import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('Invalid Login Test', async({page})  => {

const loginPage=new LoginPage(page);
await loginPage.navigateToLoginPage();
await loginPage.login(
    'wrong username',
    'Wrong password'
);

await loginPage.verifyInvalidLogin();
});