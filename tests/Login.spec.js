import{tests, expect} from '@playwright/test';
import { loginpage } from '../Pages/LoginPage';
import data from '../data/data.json';
test('Login Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginpage=new loginpage(page);
  await loginpage.login('standard_user', 'secret_sauce');
});