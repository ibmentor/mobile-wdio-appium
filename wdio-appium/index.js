var nodemailer = require('nodemailer');
const path = require("path")
const filePath = path.join(process.cwd(), './test-data/TestScreenshot.png');


var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vy493046@gmail.com',
    pass: 'usqyhodhipbepxby'
  }
});

var mailOptions = {

  from: 'vy493046@gmail.com',
  to: 'parvkhanna10@gmail.com',
  subject: 'Sending Email using Node.js with Wdio',
  html: '<h1>Appium-wdio test report</h1><p>Sending the report via email</p>',
  attachments: [{
    filename: filePath,
  }]
}

mail.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});