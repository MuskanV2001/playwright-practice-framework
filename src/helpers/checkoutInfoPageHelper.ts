import CheckoutInfoPagePO from "../pages/checkoutInfoPagePO";

export default class CheckoutInfoPageHelper {
    private checkoutInfoPagePO: CheckoutInfoPagePO;

    constructor(page: any) {
        this.checkoutInfoPagePO = new CheckoutInfoPagePO(page);
    }

    async verifyCheckoutInfoPage(){
        try{
            await this.checkoutInfoPagePO.pageTitle.waitFor({ state: "visible", timeout: 5000 });
            await this.checkoutInfoPagePO.pageTitle.isVisible();
            console.log("Checkout info page is visible.");
            return true;
        }
        catch(error){
            console.error("Error verifying checkout info page: ", error);
            return false;
        }
    }

    async enterCheckoutInfo(firstName: string, lastName: string, postalCode: string){
        try{
            await this.checkoutInfoPagePO.firstNameInput.waitFor({ state: "visible", timeout: 5000 });
            await this.checkoutInfoPagePO.firstNameInput.fill(firstName);
            console.log("First name entered: ", firstName);
            await this.checkoutInfoPagePO.lastNameInput.waitFor({ state: "visible", timeout: 5000 });
            await this.checkoutInfoPagePO.lastNameInput.fill(lastName);
            console.log("Last name entered: ", lastName);
            await this.checkoutInfoPagePO.zipcodeInput.waitFor({ state: "visible", timeout: 5000 });
            await this.checkoutInfoPagePO.zipcodeInput.fill(postalCode);
            console.log("Postal code entered: ", postalCode);
            await this.checkoutInfoPagePO.continueButton.waitFor({ state: "visible", timeout: 5000 });
            await this.checkoutInfoPagePO.continueButton.click();
            console.log("Continue button clicked.");
            return true;
        }
        catch(error){
            console.error("Error entering checkout info: ", error);     
            return false;
        }
    }
}