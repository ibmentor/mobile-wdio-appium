import AddressPage from "../pages/addressPage";
import { shoppinglistData } from "../test-data/data";
import { readDataFromCsv } from '../utils/function';
import emailReporter from '../utils/emailReporter'


describe('To test the functionality of colorNote application', async function () {
    //The below logic will rerun the failed test cases for one time after the execution is completed of all the test cases
    this.retries(1)
    beforeEach("To restore the app's homepage", async () => {
        //Start an Android activity by providing package name and activity name
        await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main")
    });

    afterEach("To raise a bug in Jira", async () => {
        // The below function will send the post build email with HTML report attached 
        await emailReporter.emailReport()
    });
    
    it('To create a new note', async () => {
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
    })
    it('To verify the note title ', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        const testData = await readDataFromCsv();
        await AddressPage.noteHeading.setValue(testData.heading);
        await expect(await AddressPage.noteHeading.getText()).toEqual("Shopping list 1");
    })

    it('To add items in the note body', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        const testData = await readDataFromCsv();
        await AddressPage.noteHeading.setValue(testData.heading)
        await AddressPage.noteBody.click()
        await driver.sendKeys(testData.firstList)
        await browser.pause(4000)
        await AddressPage.saveTickBox.click();
    })


    it('To verify the save button functionality', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        const testData = await readDataFromCsv();
        await AddressPage.noteHeading.setValue(testData.heading)
        await AddressPage.noteBody.click()
        await driver.sendKeys(testData.firstList)
        await browser.pause(4000)
        await AddressPage.saveTickBox.click();
    })

    it('To edit the saved note', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        const testData = await readDataFromCsv();
        await AddressPage.noteHeading.setValue(testData.heading);
        await AddressPage.noteBody.click()
        await driver.sendKeys(testData.firstList)
        await AddressPage.saveNote();
        await AddressPage.noteTitle.click()
        await AddressPage.editBtn.click();
        await driver.sendKeys(testData.secondList)
        await driver.pause(4000);
        await AddressPage.saveNote();

    })

});