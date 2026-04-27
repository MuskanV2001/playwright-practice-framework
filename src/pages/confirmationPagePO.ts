import { Locator } from "@playwright/test";

export default class ConfirmationPagePO {

    readonly pageTitle: Locator;
    readonly confirmationMessage: Locator ;
    readonly infoMessage: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: any) {
        this.pageTitle = page.locator('//h3[text()="Checkout: Complete!"]');
        this.confirmationMessage = page.locator('//h3[text()="Thank you for your order!"]');
        this.infoMessage = page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        this.continueShoppingButton = page.locator('//button/span[text()="Continue Shopping"]');
    }
}