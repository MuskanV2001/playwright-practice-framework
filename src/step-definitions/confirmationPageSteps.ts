import { createBdd } from "playwright-bdd";
import {test, expect} from '../fixtures/appFixtures';

const { Given, When, Then } = createBdd(test);

Given('User should see the order confirmation page with order details', async({confirmationPagehlp})=>{
    expect(await confirmationPagehlp.verifyOrderConfirmation()).toBeTruthy();
    expect(await confirmationPagehlp.clickContinueShoppingButton()).toBeTruthy();
});

