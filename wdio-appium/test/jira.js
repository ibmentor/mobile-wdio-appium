import JiraApi from 'jira-client';
class Jira{
    async  raiseIssue()
    {

    var jira = new JiraApi(
           {
            protocol : 'https',
            host : 'appium-wdio.atlassian.net/',
            username: 'parv.khanna@infobeans.com',
            password: '3RsD4uYRs1bFnxwQmUod0C95',
            apiVersion:'2',
            strictSSL: true,
            });
            

            var options = {
                "fields":
                {
                    "project":
                    {"key":"AWD"},
                
                "issuetype":{"name":"Bug"},
                "summary":"Appium-wdio-DEMO101",
                "description":"test101"
                },
            }

            await jira.addNewIssue(options);

        }
}
              export default new Jira();
