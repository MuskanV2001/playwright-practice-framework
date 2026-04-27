import DashboardPagePO from "../pages/dashboardPagePO";

export default class DashboardPageHelper {
    private dashboardPagePO: DashboardPagePO;

    constructor(page: any) {
        this.dashboardPagePO = new DashboardPagePO(page);
    }

    async verifyDashboardPage() {
        try{
            await this.dashboardPagePO.pageTitle.waitFor({ state: "visible"});
            await this.dashboardPagePO.pageTitle.isVisible();
            console.log("Dashboard page title displayed");
            return true;
        }
        catch(error){
            console.error("Error verifying dashboard page:", error);
            return false;
        }
    }

    async verifyItemSorting(){
        try{
            await this.dashboardPagePO.sortDropdown.waitFor({ state: "visible"});
            await this.dashboardPagePO.sortDropdown.isVisible();
            await this.dashboardPagePO.sortDropdown.click();
            console.log("Clicked on sort dropdown");
            await this.dashboardPagePO.alphabeticDescOption.waitFor({ state: "visible"});
            await this.dashboardPagePO.alphabeticDescOption.isVisible();
            await this.dashboardPagePO.alphabeticDescOption.click();
            console.log("Sorted products in Descending alphabetical order");

            await this.dashboardPagePO.sortDropdown.waitFor({ state: "visible"});
            await this.dashboardPagePO.sortDropdown.isVisible();
            await this.dashboardPagePO.sortDropdown.click();
            await this.dashboardPagePO.highToLowOption.waitFor({ state: "visible"});
            await this.dashboardPagePO.highToLowOption.isVisible();
            await this.dashboardPagePO.highToLowOption.click();
            console.log("Sorted products in the decreasing order of Price");
            return true;
        }
        catch(error){
            console.error("Error while sorting on dashboard page:", error);
            return false;
        }
    }

    async selectProductsAndAddToCart(productsToAdd: string) {
        try{
            const products = productsToAdd.split(",").map(product => product.trim());

            for (const product of products) {
                const productName = this.dashboardPagePO.getProductNameLocator(product);
                await productName.waitFor({ state: "visible"});
                await productName.isVisible();
                console.log(`Product - ${product} - is visible on the dashboard page`);

                const productPrice = this.dashboardPagePO.getProductPriceLocator(product);
                await productPrice.waitFor({ state: "visible"});
                await productPrice.isVisible();
                console.log(`Product - ${product} - price is visible on the dashboard page`);

                const addToCartButton = this.dashboardPagePO.getAddToCartButtonLocator(product);
                await addToCartButton.waitFor({ state: "visible"});
                await addToCartButton.isVisible();
                await addToCartButton.click();
                console.log(`Clicked on ${product} to add to cart`);
            }
            return true;
        }
        catch(error){
            console.error("Error selecting products and adding to cart:", error);
            return false;
        }
    }

    async clickOnCartIcon() {
        try{
            await this.dashboardPagePO.cartIcon.waitFor({ state: "visible"});
            await this.dashboardPagePO.cartIcon.isVisible();
            await this.dashboardPagePO.cartIcon.click();
            console.log("Clicked on cart icon");
            return true;
        }
        catch(error){
            console.error("Error clicking on cart icon:", error);
            return false;
        }
    }

    async logout() {
        try{
            await this.dashboardPagePO.profileButton.waitFor({ state: "visible"});
            await this.dashboardPagePO.profileButton.isVisible();
            await this.dashboardPagePO.profileButton.click();
            console.log("Clicked on profile button");
            await this.dashboardPagePO.logoutButton.waitFor({ state: "visible"});
            await this.dashboardPagePO.logoutButton.isVisible();
            await this.dashboardPagePO.logoutButton.click();
            console.log("Clicked on logout button");
            await this.dashboardPagePO.logoutButtonPopup.waitFor({ state: "visible"});
            await this.dashboardPagePO.logoutButtonPopup.isVisible();
            await this.dashboardPagePO.logoutButtonPopup.click();
            console.log("Clicked Confirm Logout")
            return true;
        }
        catch(error){
            console.error("Error logging out:", error);
            return false;
        }      
    }
}   