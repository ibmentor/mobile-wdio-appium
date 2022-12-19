class EmailReporter {

    async emailReport() {

        let username = 'vy493046@gmail.com'
        let toList = 'parvkhanna10@gmail.com'
        const password = 'usqyhodhipbepxby'
        var nodemailer = require('nodemailer')
        const filesData = [{ name: 'TestScreenshot.png', path: './test-data/TestScreenshot.png', cid: 'report' },]
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