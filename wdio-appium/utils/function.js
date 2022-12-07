const fs = require("fs")
const path = require("path")
import createOrder from '../pages/createOrder';
import basicDetailsPage from '../pages/basicDetailsPage';
import { allureUtil as allure } from "../utils/util.allure"
const { salesDoneData } = require('../data/salesDoneDetails.data');
import decisionOrderPlatformPage from "../pages/decisionOrderPlatformPage"
export function getRandomNum(lengthOfString = 10) {
  let d = new Date()
  let n = d.getTime()
  n = n.toString()
  let len = n.length
  len = len - lengthOfString
  n = parseInt("9" + n.slice(len + 1))
  return n
}

export async function salesDetails() {

  allure.startStep("Maximizing the window")
  await browser.maximizeWindow()
  allure.startStep("Opening KART Url")
  await createOrder.openByjusOrderPage()
  allure.startStep("Clicking on Punch order button")
  await createOrder.punchNewOrder()
  await basicDetailsPage.fillCustomerDetails(
      salesDoneData,
      process.env.USER_EMAIL_SANJAY
  )
  
}

export async function salesDetailsWithPgQueryYes() {

  allure.startStep("Maximizing the window")
  await browser.maximizeWindow()
  allure.startStep("Opening KART Url")
  await createOrder.openByjusOrderPagewithPgQueryYes()
  allure.startStep("Clicking on Punch order button")
  await createOrder.punchNewOrder()
  await basicDetailsPage.fillCustomerDetails(
      salesDoneData,
      process.env.USER_EMAIL_SANJAY
  )
  
}

export function getValidityYear(validity) {
  let currentYear = new Date().getFullYear()
  let validityYear = parseInt(currentYear) + parseInt(validity)
  console.log(validityYear)
  if (validityYear <= currentYear + 15) {
    return validityYear
  } else {
    return currentYear + 1
  }
}
export async function waitAndDoClick(element) {
  await element.waitForExist({ timeout: 80000 })
  await element.click()
}
export async function typeAndEnter(text) {
  await browser.keys(text)
  await browser.keys("\uE007")
}

export async function skuValidation(skulist) {
  const nameSkuNames = []
  for (const sku of skulist.split("\n")) {
    nameSkuNames.push(sku.split(":")[0].trim())
  }
  return nameSkuNames
}
export async function priceValidationWithBasePrice(
  basePrice,
  continuousPrice,
  tabletPrice,
  differenceinClasses
) {
  let UpgradedContinuousPrice =
    Number(differenceinClasses) * Number(continuousPrice)
  let standardPrice = Number(basePrice) + Number(UpgradedContinuousPrice)
  let maximumCost = Number(standardPrice) + Number(tabletPrice)
  let minimumCost =
    Math.floor((Number(standardPrice) * 0.8) / 1000) * 1000 +
    Number(tabletPrice)
  console.log(maximumCost, minimumCost)
  return { maximumCost, minimumCost }
}

export async function priceValidationWithBaseContSDPrice(
  basePrice,
  continuousPrice,
  SdCardPrice,
  tabletPrice
) {
  let standardPrice = Number(basePrice) + Number(continuousPrice + SdCardPrice)
  let maximumCost = Number(standardPrice) + Number(tabletPrice)
  let minimumCost =
    Math.floor((Number(standardPrice) * 0.8) / 1000) * 1000 +
    Number(tabletPrice)
  console.log(maximumCost, minimumCost)
  return { maximumCost, minimumCost }
}

export async function priceValidationWithMaxPriceOnly(
  maxCost,
  uIMinimumCost,
  uIMaximumCost
) {
  let maximumPrice = maxCost
  let minimumPrice = Number(maximumPrice) * 0.8
  await expect(uIMinimumCost).toEqual(minimumPrice)
  console.log("Minimum cost is matching")
  await expect(uIMaximumCost).toEqual(maximumPrice)
  console.log("Maximum cost is matching")
}

export async function waitForDisplayedAndClickable(element) {
  await element.waitForDisplayed({ timeout: 30000 })
  await element.waitForClickable({ timeout: 30000 })
}

export async function getWindowHandles() {
  const handles = await browser.getWindowHandles()
  if (handles.length >= 3) {
    await browser.closeWindow()
    await browser.switchToWindow(handles[0])
    await browser.closeWindow()
    await browser.switchToWindow(handles[1])
  } else if ((handles.length = 2)) {
    await browser.closeWindow()
    await browser.switchToWindow(handles[0])
  }
}
export async function convertsAllArraystoJSONObject(draftOrderIdArr) {
  var result = []
  result.push({
    draftOrderId: draftOrderIdArr,
  })

  return result
}

export async function updateJsonValueForAvanse(newAppId) {
  const fileName = path.join(process.cwd(), "data/emiPaymentDetails.json")
  const file = require(fileName)
  file.avanseAappId = newAppId
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err)
    console.log(JSON.stringify(file))
    console.log("writing to " + fileName)
  })
}
export async function updateJsonValue(newRefId, pathOfJson) {
  console.log("pathOfJson: " + pathOfJson)
  const fileName = path.join(process.cwd(), pathOfJson)
  const file = require(fileName)
  file.paymentRefId = newRefId

  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err)
    console.log(JSON.stringify(file))
    console.log("writing to " + fileName)
  })
}
  export async function skuVerification(actualSkus, expectedSkus) {
    console.log("**function***********" + expectedSkus)
    for (let i = 0; i < actualSkus.length; i++) {
      console.log("sku number " + i + "= " + actualSkus[i])
      expectedSkus.includes(actualSkus[i])
      if (expectedSkus.indexOf(actualSkus[i]) > -1) {
        console.log("Sku is validated")
      } else {
        console.log("Sku is not matching")
        console.log("This sku :" + actualSkus[i] + "is not matching")
        expect("Sku's didn't matched").toEqual("Sku's matched")
      }
    }
  
}
export async function pushDraftOrderToCsv(draftOrderId){

  var result = await convertsAllArraystoJSONObject(draftOrderId);
  await decisionOrderPlatformPage.updateDraftOrderIdInCsvFile(result);
}

export async function pushSpecCombinationToCsv(combinationDetails){

  var result = await convertsAllArraystoJSONObject(combinationDetails);
  await decisionOrderPlatformPage.updateScriptCombinationDetailsInCsv(result);
}

export async function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
  }
  return sum;
}

export async function duplicate(array, duplicator) {
  var buildArray = [];
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < duplicator; j++) {
          buildArray.push(array[i]);
      }
  }
  return buildArray;
}
