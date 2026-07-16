import basepage from "./basepage";
export class homepage extends basepage{
    constructor(page){
        super(page);
        this.addTocart=page.locator('#add-to-cart-sauce-labs-backpack');
        this.cart=page.locator('.shopping_cart_link');
    }
    async addproduct(){
        await this.click(this.addTocart);

    }
    async opencart(){
        await this.click(this.cart);
    }
}