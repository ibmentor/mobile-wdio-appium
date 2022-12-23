const fs = require("fs")
const path = require("path")
const csv = require('csvtojson');
var xlsx = require('node-xlsx');
const excelToJson = require('convert-excel-to-json');

//The below function will generate randon 10 digits number
export function getRandomNum(lengthOfString = 10) {
  let d = new Date()
  let n = d.getTime()
  n = n.toString()
  let len = n.length
  len = len - lengthOfString
  n = parseInt("9" + n.slice(len + 1))
  return n
}

//The below function can be used where you have to wait for a particular element to exist first and then perform the click action
export async function waitAndDoClick(element) {
  await element.waitForExist({ timeout: 80000 })
  await element.click()
}

//The below function can be used where you have to wait for a particular element to be Displayed and Clickable first and then perform the click action

export async function waitForDisplayedAndClickable(element) {
  await element.waitForDisplayed({ timeout: 30000 })
  await element.waitForClickable({ timeout: 30000 })
  await element.click()
}

//The below function will return you the JSON object from xlsx sheet
export async function readDataFromExcel() {
  const filePath = path.join(process.cwd(), './test-data/testData.xlsx');
  const result = excelToJson({
    source: fs.readFileSync(filePath), // fs.readFileSync return a Buffer
    header: {
      // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
      rows: 1 // 2, 3, 4, etc.
    }
  });
  return result;
}

//The below function will return you the JSON object from csv sheet

export async function readDataFromCsv(skuId) {
  const filePath = path.join(process.cwd(), './test-data/testdata.csv');
  const testData = await csv().fromFile(filePath); //test data is JSON object
  const heading = testData[0].heading
  const firstList = [testData[0].list, testData[1].list, testData[2].list]
  const secondList = [testData[0].list2, testData[1].list2, testData[2].list2]

  return { heading, firstList, secondList };
}

//Below function will help you in deleting a particular folder
export async function deleteFolder() {
  const folderPath = path.join(process.cwd(), './Results/');
  const filename = path.join(process.cwd(), './FinalJsonReport/');
  const folders = [filename, folderPath];

  for (let i = 0; i <= 1; i++) {

    fs.readdir(folders[i], (err, files) => {
      if (err) throw err;

      for (const file of files) {
        console.log(file + ' : Folder is Deleted Successfully.');
        fs.unlinkSync(folders[i] + file);
      }
    }
    );
  }

}


