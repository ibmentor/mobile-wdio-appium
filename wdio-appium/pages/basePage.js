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
        //Concatinating the url
        return browser.url(`${'Weburl'}${'remaining url'}`)
    }
    //
    goToUrl(urlText) {
        return browser.url(urlText)
    }
}
