
import basePage from "./basePage"

class AddressPage extends basePage 
{
    
    get menuOptions()
    {
      return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get btnSkip()
    {
        return $('//*[@text="SKIP"]')
    }

    //return $("(//button[@name='googleSignUpButton'])[2]")
    get themeBlack()
    {
      return $("(//*[@class='android.widget.LinearLayout'])[2]")
    }
    get btnTheame()
    {
      return $('//*[@text="Theme"]')
    }
    async skipTutorial()
    {
        try{
            await this.btnSkip.click()
        }
        catch{}
        
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
      get noteTitle() 
      {
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

      get backbtn()
      {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
      }
      get saveTickBox()
      {
        return $("android.widget.ImageButton")
      }

      get colorBox()
      {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/color_btn"]')
      }
    
      get redcolorBox()
      {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/txt1"]')
      }
      async saveNote() {

        await this.saveTickBox.click();
        await this.backbtn.click()
        // await driver.back();
        // await driver.back();
      }

}
export default new AddressPage();
