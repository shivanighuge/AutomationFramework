import { BasePage } from "./BasePage";
export class cartpage extends BasePage{
    constructor(page){
    
        this.checkout=page.locator('#checkout');

    }
    async checkout(){
        await this.checkout.click();
    }
}