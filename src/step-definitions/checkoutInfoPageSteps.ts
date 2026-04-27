import { createBdd } from "playwright-bdd"; 
import {expect, test} from '../fixtures/appFixtures';

const { Given, When, Then } = createBdd(test);

Given('User proceeds to checkout and enters details {string}, {string}, {string}', async({checkoutInfoPagehlp},firstName, lastName, zipcode)=>{
    expect(await checkoutInfoPagehlp.verifyCheckoutInfoPage()).toBeTruthy();
    expect(await checkoutInfoPagehlp.enterCheckoutInfo(firstName, lastName, zipcode)).toBeTruthy();
});

