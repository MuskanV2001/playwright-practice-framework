import ConfirmationPagePO from "../pages/confirmationPagePO";  

export default class ConfirmationPageHelper {
    private confirmationPagePO: ConfirmationPagePO;
    
    constructor(page: any) {
        this.confirmationPagePO = new ConfirmationPagePO(page);
    }

    async verifyOrderConfirmation(){
        try{
            await this.confirmationPagePO.pageTitle.waitFor({ state: 'visible', timeout: 5000 });
            await this.confirmationPagePO.pageTitle.isVisible();
            console.log("Order confirmation page is displayed.");
            await this.confirmationPagePO.confirmationMessage.waitFor({ state: 'visible', timeout: 5000 });
            await this.confirmationPagePO.confirmationMessage.isVisible();
            console.log("Order confirmation message is displayed: " + await this.confirmationPagePO.confirmationMessage.textContent());
            await this.confirmationPagePO.infoMessage.waitFor({ state: 'visible', timeout: 5000 });
            await this.confirmationPagePO.infoMessage.isVisible();
            console.log("Additional information message is displayed: " + await this.confirmationPagePO.infoMessage.textContent());
            return true;
        }
        catch(error){
            console.error("Error verifying order confirmation:", error);
            return false;
        }
    }

    async clickContinueShoppingButton(){
        try{
            await this.confirmationPagePO.continueShoppingButton.waitFor({ state: 'visible', timeout: 5000 });
            await this.confirmationPagePO.continueShoppingButton.isVisible();
            await this.confirmationPagePO.continueShoppingButton.click();
            console.log("Continue shopping button clicked.");
            return true;
        }
        catch(error){
            console.error("Error clicking continue shopping button:", error);
            return false;
        }
    }
}