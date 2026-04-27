import CheckoutReviewPagePO from "../pages/checkoutReviewPagePO";

export default class CheckoutInfoPageHelper {
    private checkoutReviewPagePO: CheckoutReviewPagePO;

    constructor(page: any) {
        this.checkoutReviewPagePO = new CheckoutReviewPagePO(page);
     }

    async verifyCheckoutReviewPage(){
        try{
            await this.checkoutReviewPagePO.pageTitle.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.pageTitle.isVisible();
            console.log("Checkout review page is displayed.");
            return true;
        }
        catch(error){
            console.error("Error verifying checkout review page:", error);
            return false;
        }
    }

    async verifyOrderSummary(){
        try{
            await this.checkoutReviewPagePO.paymentInfoHeader.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.paymentInfoHeader.isVisible();
            console.log("Header displayed: " + await this.checkoutReviewPagePO.paymentInfoHeader.textContent());
            await this.checkoutReviewPagePO.paymentInfo.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.paymentInfo.isVisible();
            console.log("Payment info displayed: " + await this.checkoutReviewPagePO.paymentInfo.textContent());    
            await this.checkoutReviewPagePO.shippingInfoHeader.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.shippingInfoHeader.isVisible();
            console.log("Header displayed: " + await this.checkoutReviewPagePO.shippingInfoHeader.textContent());
            await this.checkoutReviewPagePO.shippingInfo.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.shippingInfo.isVisible();
            console.log("Shipping info displayed: " + await this.checkoutReviewPagePO.shippingInfo.textContent());
            await this.checkoutReviewPagePO.priceTotalHeader.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.priceTotalHeader.isVisible();
            console.log("Header displayed: " + await this.checkoutReviewPagePO.priceTotalHeader.textContent());
            await this.checkoutReviewPagePO.itemTotal.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.itemTotal.isVisible();
            console.log("Item total displayed: " + await this.checkoutReviewPagePO.itemTotal.textContent());
            await this.checkoutReviewPagePO.taxAmount.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.taxAmount.isVisible();
            console.log("Tax amount displayed: " + await this.checkoutReviewPagePO.taxAmount.textContent());
            await this.checkoutReviewPagePO.totalAmount.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.totalAmount.isVisible();
            console.log("Total amount displayed: " + await this.checkoutReviewPagePO.totalAmount.textContent());
            console.log("------- Order summary is displayed correctly -------");
            return true;
        }
        catch(error){
            console.error("Error verifying order summary:", error);
            return false;
        }  
    }

    async confirmOrder(){  
        try{
            await this.checkoutReviewPagePO.finishButton.waitFor({ state: "visible" });
            await this.checkoutReviewPagePO.finishButton.isVisible();
            await this.checkoutReviewPagePO.finishButton.click();
            console.log("Clicked on Finish button to confirm order.");
            return true;
        }
        catch(error){
            console.error("Error confirming order:", error);
            return false;
        } 
    }
}