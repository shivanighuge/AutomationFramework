import{tests, expect} from '@playwright/test';
import { loginpage } from '../Pages/LoginPage';
import homepage from '../Pages/HomePage';
import data from '../data/data.json';
test("Add to Cart", async ({ page }) => {
   const login=new loginpage(page); 
   await login.login(data.username, data.password);
   const product=new productpage(page);
   await product.addproduct();
   await product.opencart();
});