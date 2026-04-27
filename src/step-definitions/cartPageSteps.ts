import {createBdd} from 'playwright-bdd';
import {test, expect} from '../fixtures/appFixtures';

const {Given, When, Then} = createBdd(test);

Given('User navigates to the cart page and verifies the cart contents with {string}', async({cartPagehlp}, productsToAdd)=>{
    expect(await cartPagehlp.verifyCartPage()).toBeTruthy();
    expect(await cartPagehlp.verifyCartContents(productsToAdd)).toBeTruthy();
    expect(await cartPagehlp.clickCheckoutButton()).toBeTruthy();
});



