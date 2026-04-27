import { Locator } from "@playwright/test";

export default class DashboardPagePO{

    readonly pageTitle: Locator;
    readonly sortDropdown: Locator;
    readonly highToLowOption: Locator;
    readonly alphabeticDescOption: Locator;
    readonly cartIcon: Locator;
    readonly profileButton: Locator;
    readonly logoutButton: Locator;
    readonly logoutButtonPopup: Locator;

    constructor(private page: any) {
        this.pageTitle = page.locator('//h3[text()="Products"]');
        this.sortDropdown = page.locator('button[role="combobox"]');
        this.highToLowOption = page.locator('//div[@data-value="high"]');
        this.alphabeticDescOption = page.locator('//div[@data-value="dsc"]');
        this.cartIcon = page.locator('//header[@id="ecommerce-header"]//span[@role="button"]');
        this.profileButton = page.locator('//div[contains(@class,"profile")]/button/span[1]');
        this.logoutButton = page.locator('//button/div[@role="menuitem"]');
        this.logoutButtonPopup = page.locator('//button[@data-slot="dialog-close" and text()="Logout"]');
    }

    getProductNameLocator(productName: string){
        return this.page.locator('//a[contains(text(),"'+ productName +'")]');
    }

    getProductPriceLocator(productName: string){
        return this.page.locator('//a[contains(text(),"'+ productName +'")]/following-sibling::div/span');
    }

    getAddToCartButtonLocator(productName: string){
        return this.page.locator('//a[contains(text(),"'+ productName +'")]/following-sibling::div/button');
    }

}