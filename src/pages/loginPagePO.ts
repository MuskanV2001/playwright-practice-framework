import { Locator } from "@playwright/test";

export default class LoginPagePO{

    readonly pageLogo: Locator;
    readonly pageTitle: Locator ;
    readonly emailInput: Locator;
    readonly passwordInput: Locator
    readonly loginButton: Locator;

    constructor(private page: any) {
        this.pageLogo = page.locator('header#ecommerce-header>>a[href="/ecommerce"]');
        this.pageTitle = page.locator('//h2[text()="Login"]');
        this.emailInput = page.locator('input#email');
        this.passwordInput = page.locator('input#password');
        this.loginButton = page.locator('button[type="submit"]');
    }
}