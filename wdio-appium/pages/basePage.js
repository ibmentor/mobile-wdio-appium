/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class basePage {

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`${process.env.KART_URL}${path}`)
    }
            //

    openByjusPayPage(){
        return browser.url(`${process.env.PAYMENTS_URL}`)
    }
    goToUrl(urlText) {
        return browser.url(urlText)
    }
    async openOmsUrl(count,ssoId) {
        if (count < 1) {
            return browser.url(`${process.env.OMS_BYJUS_URL}`)
        }
        else if (count >= 2) {
            return browser.url(`${process.env.OMS_BYJUS_URL}${"orders/product-sales-sub-orders/"}${ssoId}`)
        }
    }
}
