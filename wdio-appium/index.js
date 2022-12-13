var nodemailer = require('nodemailer');

var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vy493046@gmail.com',
      pass: 'usqyhodhipbepxby'
    }
  });

  var mailOptions = {
    from: 'vy493046@gmail.com',
    to: 'pranshud1395@gmail.com',
    subject: 'Sending Email using Node.js with Wdio',
    // html: '<h1>Welcome</h1><p>That was easy!</p>',
    //  attachments: [{
    //      filename: 'text1.txt',
    //      content: 'hello world!'
    //  }]
  }

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });