import { test as basetest } from 'playwright-bdd';
import { expect } from '@playwright/test';

import LoginPageHelper from '../helpers/loginPageHelper';
import DashboardPageHelper from '../helpers/dashboardPageHelper';
import CartPageHelper from '../helpers/cartPageHelper';
import CheckoutInfoPageHelper from '../helpers/checkoutInfoPageHelper';
import CheckoutReviewPageHelper from '../helpers/checkoutReviewPageHelper';
import ConfirmationPageHelper from '../helpers/confirmationPageHelper';

type AppFixtures = {
    loginPagehlp: LoginPageHelper;
    dashboardPagehlp: DashboardPageHelper;
    cartPagehlp: CartPageHelper;
    checkoutInfoPagehlp: CheckoutInfoPageHelper;
    checkoutReviewPagehlp: CheckoutReviewPageHelper;
    confirmationPagehlp: ConfirmationPageHelper;
}

export const test = basetest.extend<AppFixtures>({
    loginPagehlp: async ({page}, use) => {
        const loginPageHelper = new LoginPageHelper(page);
        await use(loginPageHelper);
    },
    dashboardPagehlp: async ({page}, use) => {
        const dashboardPageHelper = new DashboardPageHelper(page);
        await use(dashboardPageHelper);
    },
    cartPagehlp: async ({page}, use) => {
        const cartPageHelper = new CartPageHelper(page);
        await use(cartPageHelper);
    },
    checkoutInfoPagehlp: async ({page}, use) => {
        const checkoutInfoPageHelper = new CheckoutInfoPageHelper(page);
        await use(checkoutInfoPageHelper);
    },
    checkoutReviewPagehlp: async ({page}, use) => {
        const checkoutReviewPageHelper = new CheckoutReviewPageHelper(page);
        await use(checkoutReviewPageHelper);
    },
    confirmationPagehlp: async ({page}, use) => {
        const confirmationPageHelper = new ConfirmationPageHelper(page);
        await use(confirmationPageHelper);
    }
});

export {expect};