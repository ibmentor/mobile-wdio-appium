import basePage from "./basePage"
import { waitForDisplayedAndClickable } from "../utils/function"
import { typeAndEnter } from "../utils/function"

class addressPage extends basePage {
    get tfZipCode() { return $("//input[@id='zipcode']") }
    get tfAddressLine1() { return $("#addressLine1") }
    get tfAddressLine2() { return $("#streetLocality") }
    get landMark() { return $("//input[@id = 'Area/Landmark']") }
    get tfAddressLine3() { return $("#postalAddress") }
    get btnNext() { return $("//button[text()='Next']") }
    get btnClose() { return $("//span[text()='Close']/..") }
    async fillCustomereAddress(data) {
        await waitForDisplayedAndClickable(this.tfZipCode);
        await this.tfZipCode.setValue(data.studentsPincode);
        await this.tfAddressLine1.waitForClickable({ timeout: 50000 });
        await this.tfAddressLine1.setValue(data.addressLine1);
        await this.tfAddressLine2.waitForClickable({ timeout: 50000 });
        await this.tfAddressLine2.setValue(data.addressLine2);
        // await this.landMark.setValue(data.landMark);
        await this.tfAddressLine3.click();
        await browser.keys(data.addressLine3)
        await browser.pause(2000);
        await this.btnNext.click();
        await this.btnClose.scrollIntoView();
        await this.btnClose.waitForClickable({ timeout: 30000 });
        await this.btnClose.click();
    }
}
export default new addressPage()
