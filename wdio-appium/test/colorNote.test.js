import AddressPage from "../pages/addressPage";

describe('To test the functionality of colorNote application', async function() {
    beforeEach("To restore the app's homepage", async () => {
        await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main")
        
    });
    it('To create a new note', async () =>
    {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
    })
    it('To verify the note title ', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        await AddressPage.noteHeading.addValue("Shopping List");
    })

    it('To add items in the note body', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
    
        await AddressPage.noteHeading.addValue("Shopping List");
    
        await AddressPage.noteBody.addValue("Rice\Tea\Sugar");
        await driver.pause(2000);
        await AddressPage.saveTickBox.click();
        await expect(AddressPage.editBtn).toBeDisplayed();
        await expect(AddressPage.viewNote).toHaveText("Rice\Tea\Sugar");
    })


    it('To verify the save button functionality', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        await AddressPage.noteHeading.addValue("Shopping List");
        await AddressPage.noteBody.addValue("Rice\Tea\Sugar");
        await driver.pause(2000);
        await AddressPage.saveTickBox.click();
    })

    it('To edit the saved note', async () => {
        await AddressPage.skipTutorial()
        await AddressPage.addNoteTxt.click();
        await AddressPage.textOption.click();
        await expect(AddressPage.textEditing).toBeDisplayed();
        await AddressPage.noteHeading.addValue("Shopping List");
        await AddressPage.noteBody.addValue("Rice,Tea,Sugar");
        await AddressPage.saveNote();
        await AddressPage.noteTitle.click()
        await AddressPage.editBtn.click(); 
        await AddressPage.noteBody.click()
        await driver.sendKeyEvent('Enter');
        await AddressPage.noteBody.setValue("Coffee , Milk")
        await driver.pause(4000);
        await AddressPage.saveNote();
        
    })

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
        await AddressPage.btnTheame.click();
        await AddressPage.themeBlack.click();
        await driver.pause(10000);
        
    })

});