import{tests, expect} from '@playwright/test';

tests('Login Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginpage=new loginpage(page);
  await loginpage.login('standard_user', 'secret_sauce');
});