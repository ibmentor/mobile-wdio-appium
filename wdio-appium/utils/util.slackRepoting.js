
const { IncomingWebhook } = require('@slack/webhook');
const webhookURL = 'https://hooks.slack.com/services/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'
const webhook = new IncomingWebhook(webhookURL);

class SlackReporter {

    async sendMessage(body) {
        await webhook.send(body);
    }

    async sendPreMessage(postMsg) {
        const preBody = {
            'text': postMsg
        };
        await this.sendMessage(preBody);
    }
}
export default new SlackReporter();