import {createBdd} from 'playwright-bdd';
import {test, expect} from '../fixtures/appFixtures';

const {Given, When, Then} = createBdd(test);

Given('User is on the loginPage', async({loginPagehlp})=>{
    expect(await loginPagehlp.verifyLoginPage()).toBeTruthy();
});

Given('User logins with valid credentials {string} and {string}', async({loginPagehlp}, useremail: string, password: string)=>{
    expect(await loginPagehlp.loginWithValidCreds(useremail, password)).toBeTruthy();
});