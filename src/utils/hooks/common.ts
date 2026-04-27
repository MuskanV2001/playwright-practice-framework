import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/appFixtures';

const { Before, After } = createBdd(test);

Before(async({page})=>{
    await page.goto('https://practice.qabrains.com/ecommerce/login');
});

After(async({page})=>{
    await page.close();
});