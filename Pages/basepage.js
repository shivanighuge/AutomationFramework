export class basepage {
    constructor(page){
        this.page=page;
    }
    async click(Locator){
        await Locator.click();
    }
    async fill(locator,value){
        await locator.fill(value);
    }
    async getText(Locator){
        return await Locator.textContent();
    }
    async waitForElement(Locator){
        await Locator.waitFor();
    }
    async takeScreenshot(name){
        await this.page.screenshot({path:`screenshots/${name}.png`});
    }
}