import CartPagePO from "../pages/cartPagePO";

export default class CartPageHelper {

    private cartPagePO: CartPagePO;
    
    constructor(page: any) {
        this.cartPagePO = new CartPagePO(page);
    }

    async verifyCartPage(){
        try{
            await this.cartPagePO.pageTitle.waitFor({ state: 'visible', timeout: 5000 });
            await this.cartPagePO.pageTitle.isVisible();
            console.log("Cart page title is visible");
            return true;
        }
        catch(error){  
            console.error("Error verifying cart page: ", error);
            return false; 
        }
    }

    async verifyCartContents(productsToAdd: string){
        try{
            const products = productsToAdd.split(",");
            for(const product of products){
                const productLocator = await this.cartPagePO.getProductLocator(product.trim());
                await productLocator.waitFor({ state: 'visible', timeout: 5000 });
                await productLocator.isVisible();
                console.log("Product - " + product.trim() + " - is visible in the cart");
                await this.cartPagePO.addQuantityButton(product.trim()).waitFor({ state: 'visible', timeout: 5000 });
                await this.cartPagePO.addQuantityButton(product.trim()).click();
                console.log("Clicked on add quantity button for product: " + product.trim());
            }
            return true;
        }
        catch(error){
            console.error("Error verifying cart contents: ", error);
            return false;
        }
    }

    async clickCheckoutButton(){
        try{
            await this.cartPagePO.checkoutButton.waitFor({ state: 'visible', timeout: 5000 });
            await this.cartPagePO.checkoutButton.click();
            console.log("Clicked on checkout button");
            return true;
        }
        catch(error){
            console.error("Error clicking checkout button: ", error);
            return false;
        }
    }
    
}