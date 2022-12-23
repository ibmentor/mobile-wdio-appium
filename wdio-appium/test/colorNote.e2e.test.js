import AddressPage from "../pages/addressPage";
import { shoppinglistData } from "../test-data/data";
import Gestures, { gestures } from "../utils/gestures";
import { readDataFromCsv, deleteFolder } from '../utils/function'
import jira from "../config/jira";
import emailReporter from '../utils/index'

describe('Test case for e2e flow', async function() {
    this.retries(1)
    beforeEach("To restore the app's homepage", async () => {
        await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main")
    })
    afterEach("To raise a bug in Jira", async() => {
        // await jira.raiseIssue();
    });
    it('To change the background color of note', async () => {
        
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

    })

    it.skip('To open the calender using scroll down action' , async () =>
    {
        await AddressPage.menuOptions.click();
        await AddressPage.btnsettings.click()
        await driver.pause(5000);
        //const element = await AddressPage.btnAbout;
        await $('android = new UiScrollable(new UiSelector().scrollable(true).scrollToEnd(1,5)');
        await AddressPage.btnAbout.click();
        await driver.pause(8000);
    })

});