import basePage from "./basePage"

class AddressPage extends basePage {
  //We are encapsulating the locator values 
  get menuOptions() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
  }
  get btnsettings() {
    return $("//*[@text='Settings']")
  }
  get btnAbout() {
    return $("//*[@text='About']")
  }
  get btnSkip() {
    return $('//*[@text="SKIP"]')
  }
  get themeBlack() {
    return $("(//*[@class='android.widget.LinearLayout'])[2]")
  }
  get btnTheme() {
    return $('//*[@text="Theme"]')
  }
  async skipTutorial() {
    try {
      await this.btnSkip.click()
    }
    catch { }

  }
  get addNoteTxt() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
  }
  get textOption() {
    return $('//*[@text="Text"]');
  }
  get textEditing() {
    return $('//*[@text="Editing"]');
  }
  get noteHeading() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
  }
  get noteTitle() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
  }
  get noteBody() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
  }
  get editBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
  }
  get viewNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
  }
  get backbtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
  }
  get saveTickBox() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]')
  }
  get colorBox() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/color_btn"]')
  }
  get redcolorBox() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/txt1"]')
  }

  async saveNote() {

    await this.saveTickBox.click();
    await this.backbtn.click()
  }

}
export default new AddressPage();
