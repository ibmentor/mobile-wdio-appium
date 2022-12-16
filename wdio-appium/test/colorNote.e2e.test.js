import AddressPage from "../pages/addressPage";
import { shoppinglistData } from "../test-data/data";
<<<<<<< HEAD
import { readDataFromCsv, deleteFolder } from '../utils/function'

describe('Test case for e2e flow', async function () {
    // this.retries(1)
    beforeEach("To restore the app's homepage", async () => {
        await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main")
    })
    it('To change the background color of note', async () => {
=======

describe('Test case for e2e flow', async function() {
    this.retries(1)
    beforeEach("To restore the app's homepage", async () => {
        await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main")
    })
    it.only('To change the background color of note', async () => {
>>>>>>> c63ecf8abacc86811b995295ada39ca1dc5c4679
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        await AddressPage.colorBox.click();
        await AddressPage.redcolorBox.click();
    })

    it('To change the theme of the app', async () => {
        await AddressPage.menuOptions.click();
        await AddressPage.btnTheme.click();
        await AddressPage.themeBlack.click();
<<<<<<< HEAD
        // var title = await driver.getTitle();
        // console.log("******" + title);

    })
    it.only('', async () => {
        // const result = await readDataFromExcel();
        // let json = JSON.stringify(result);
        // // console.log("******" + obj);
        // // console.log("******" + typeof (obj));
        const testData = await readDataFromCsv();
        console.log(testData.heading);
        console.log(testData.firstList);
        console.log(testData.secondList);




=======
        await driver.pause(10000);
        
>>>>>>> c63ecf8abacc86811b995295ada39ca1dc5c4679
    })

});