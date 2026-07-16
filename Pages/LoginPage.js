
import { BasePage } from "./BasePage";
export class loginpage extends BasePage {
    constructor(page){
        this.page=page;
        super(page);
        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.login=page.locator('#login-button');
    }
    
    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
    }
}