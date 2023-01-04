import JiraApi from 'jira-client';
class Jira {
    async raiseIssue() {

        var jira = new JiraApi(
            {
                protocol: 'https',
                host: 'appium-wdio.atlassian.net/',
                username: 'parv.khanna@infobeans.com',
                password: 'iOzJ9v44mbfCXgALmbvX6512',
                apiVersion: '2',
                strictSSL: true,
            });


        var options = {
            "fields":
            {
                "project":
                    { "key": "AWD" },

                "issuetype": { "name": "Bug" },
                "summary": "Broken at point 101",
                "description": "test101"
            },
        }

        await jira.addNewIssue(options);

    }
}
export default new Jira();
