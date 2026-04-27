import {createBdd} from 'playwright-bdd';
import {test, expect} from '../fixtures/appFixtures';

const {Given, When, Then} = createBdd(test);

Given('User is on the Dashboard page', async({dashboardPagehlp})=>{
    expect(await dashboardPagehlp.verifyDashboardPage()).toBeTruthy();
});

Given('User selects products {string} and adds to cart', async({dashboardPagehlp}, productsToAdd: string)=>{
    expect(await dashboardPagehlp.selectProductsAndAddToCart(productsToAdd)).toBeTruthy();
    expect(await dashboardPagehlp.clickOnCartIcon()).toBeTruthy();
});

Given('User is on the Dashboard page after order confirmation', async({dashboardPagehlp})=>{
    expect(await dashboardPagehlp.verifyDashboardPage()).toBeTruthy();
});

Given('User logs out of the application', async({dashboardPagehlp, loginPagehlp})=>{
    expect(await dashboardPagehlp.logout()).toBeTruthy();
    expect(await loginPagehlp.verifyLoginPage()).toBeTruthy();
});