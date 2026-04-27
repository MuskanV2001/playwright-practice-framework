import LoginPagePO from "../pages/loginPagePO";

export default class LoginPageHelper {

    private loginPagePO: LoginPagePO;
    
    constructor(page: any) { 
        this.loginPagePO = new LoginPagePO(page);
    }   

    async verifyLoginPage(){
        try{
            await this.loginPagePO.pageLogo.waitFor({ state: "visible" });
            await this.loginPagePO.pageLogo.isVisible();
            console.log("Login page logo displayed");
            await this.loginPagePO.pageTitle.waitFor({ state: "visible" });
            await this.loginPagePO.pageTitle.isVisible();
            console.log("Login page title displayed: " + await this.loginPagePO.pageTitle.textContent());
            return true;
        }
        catch(error){
            console.error("Error verifying login page: ", error);
            return false;
        }
    }

    async loginWithValidCreds(email: string, password: string){
        try{
            await this.loginPagePO.emailInput.waitFor({ state: "visible" });
            await this.loginPagePO.emailInput.fill(email);
            console.log("Entered username: " + email);
            await this.loginPagePO.passwordInput.waitFor({ state: "visible" });
            await this.loginPagePO.passwordInput.fill(password);
            console.log("Entered password: " + password);
            await this.loginPagePO.loginButton.waitFor({ state: "visible" });
            await this.loginPagePO.loginButton.click();
            console.log("Clicked login button");
            return true;
        }
        catch(error){
            console.error("Error logging in with valid credentials: ", error);
            return false;
        }
    }
}