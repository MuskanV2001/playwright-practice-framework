import { Locator } from "@playwright/test";

export default class CartPagePO {
    
    readonly pageTitle: Locator;
    readonly checkoutButton: Locator;

    constructor(private page: any) {
        this.pageTitle = page.locator('//h3[text()="Your Cart"]');
        this.checkoutButton = page.locator('//button/span[contains(text(),"Checkout")]');
    }

    getProductLocator(productName: string) {
        return this.page.locator('//h3[contains(text(),"'+ productName +'")]');
    }

    addQuantityButton(productName: string) {
        return this.page.locator('//h3[text()="'+ productName +'"]/ancestor::div[2]/following-sibling::div/div/button[2]');
    }
}