import {createBdd} from 'playwright-bdd';
import {expect, test} from '../fixtures/appFixtures';

const {Given, When, Then} = createBdd(test);

Given('User lands on the Checkout Overview Page', async({checkoutReviewPagehlp})=>{
    expect(await checkoutReviewPagehlp.verifyCheckoutReviewPage()).toBeTruthy();
});

Given('User verifies the order summary on checkout overview page', async({checkoutReviewPagehlp})=>{
    expect(await checkoutReviewPagehlp.verifyOrderSummary()).toBeTruthy();
});

Given('User confirms the order', async({checkoutReviewPagehlp}) => {
    expect(await checkoutReviewPagehlp.confirmOrder()).toBeTruthy();
});