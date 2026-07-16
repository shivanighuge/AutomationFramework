import { BasePage } from "./BasePage";
export class checkoutpage extends BasePage{
    constructor(page){
        super(page);
        this.firstname=page.locator('#first-name');
        this.lastname=page.locator('#last-name');
        this.zipcode=page.locator('#postal-code');
        this.continue=page.locator('#continue');
        this.finish=page.locator('#finish');
 }
    async enterDetails(){
        await this.firstname.fill('Shivani');
        await this.lastname.fill('Ghuge');
        await this.zipcode.fill('411061');
        await this.continue.click();
        await this.finish.click();
    }
}
