import { Locator } from "@playwright/test";

export default class CheckoutReviewPagePO {

    readonly pageTitle: Locator;
    readonly paymentInfoHeader: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfoHeader: Locator;
    readonly shippingInfo: Locator;
    readonly priceTotalHeader: Locator; 
    readonly itemTotal: Locator;
    readonly taxAmount: Locator;
    readonly totalAmount: Locator;
    readonly finishButton: Locator;

    constructor(page: any) {
        this.pageTitle = page.locator('//h3[text()="Checkout: Overview"]');
        this.paymentInfoHeader = page.locator('//h4[text()="Payment Information:"]');
        this.paymentInfo = page.locator('//h4[text()="Payment Information:"]/following-sibling::p');
        this.shippingInfoHeader = page.locator('//h4[text()="Shipping Information:"]');
        this.shippingInfo = page.locator('//h4[text()="Shipping Information:"]/following-sibling::p');
        this.priceTotalHeader = page.locator('//h4[text()="Price Total:"]');
        this.itemTotal = page.locator('//h4[text()="Price Total:"]/following-sibling::p[1]');
        this.taxAmount = page.locator('//h4[text()="Price Total:"]/following-sibling::p[2]');
        this.totalAmount = page.locator('//h4[text()="Price Total:"]/following-sibling::p[3]');
        this.finishButton = page.locator('//button/span[contains(text(),"Finish")]');
    }
}