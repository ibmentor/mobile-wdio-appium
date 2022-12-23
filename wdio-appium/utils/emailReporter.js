class EmailReporter {

    async emailReport() {
        //Username of sender and list or single receiver name
        let username = 'xyz@gmail.com'
        let toList = 'pxyz@gmail.com'
        const password = 'usqyhodhipbepxby'
        var nodemailer = require('nodemailer')
        //In the below code we are specifying the file details which we want to attach in our email which is html report in our case
        const filesData = [{ name: 'master-report.html', path: './reports/html-reports/master-report.html', cid: 'report' },]
        const attachments = filesData.map((file) => {
            return { filename: file.name, path: file.path, cid: file.cid };
        });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: username,
                pass: password
            }
        })
        // Below function will send mail with above mentioned details
        async function sendMail() {
            let sendResult = await transporter.sendMail({
                from: username,
                to: toList,
                subject: `html report of execution`,

                html:

                    `
<h3>Execution Report :<h3>

<img src="cid:report"/>

<h4>Thanks and Regards,</h4>
<h4>QA Automation Team</h4>`,



                attachments: attachments
            })
            console.log(sendResult)
            console.log("Mail sent Sucesssfully")
        }
        await sendMail().catch(err => console.error(err))
    }

}

export default new EmailReporter();