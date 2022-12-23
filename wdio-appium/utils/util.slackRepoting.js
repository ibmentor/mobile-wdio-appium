
const { IncomingWebhook } = require('@slack/webhook');
const webhookURL = 'https://hooks.slack.com/services/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'
const webhook = new IncomingWebhook(webhookURL);

class SlackReporter {

    //With the below function we will send messages to Slack channel
    async sendMessage(body) {
        await webhook.send(body);
    }

    async sendPreMessage(postMsg) {
        //We are passing postMsg as parameter which will have the message details in text format which we need to send to our Slack channel
        const preBody = {
            'text': postMsg
        };
        await this.sendMessage(preBody);
    }
}
export default new SlackReporter();