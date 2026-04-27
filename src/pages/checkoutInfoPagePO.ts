import { Locator } from "@playwright/test";

export default class CheckoutInfoPagePO {

    readonly pageTitle: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly zipcodeInput: Locator;
    readonly continueButton: Locator;

    constructor(page: any) {
        this.pageTitle = page.locator('//h3[text()="Checkout: Your Information"]');
        this.firstNameInput = page.locator('//label[text()="First Name"]/following-sibling::input');
        this.lastNameInput = page.locator('//label[text()="Last Name"]/following-sibling::input');
        this.zipcodeInput = page.locator('//label[text()="Zip Code"]/following-sibling::input');
        this.continueButton = page.locator('//button/span[contains(text(),"Continue")]');
    }
}