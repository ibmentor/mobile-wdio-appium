import JiraApi from 'jira-client';
class JiraReporter {

    async createJiraTicket() {
        var jira = new JiraApi({
            //
            protocol: 'https',
            host: 'appium-wdio.atlassian.net/',
            username: 'parv.khanna@infobeans.com',
            password: 'iOzJ9v44mbfCXgALmbvX6512',
            apiVersion: '2',
            strictSSL: true
        });
        var fs = require('fs');
        fs.readFile('./Results/results-0-0.[object Object].json', 'utf8', async function (err, data) {
            if (err) throw err; // we'll not consider error handling for now
            var jsonData = JSON.parse(data);
            //We will parse the JSON report file and will retrieve the test cases name 
            const tests = jsonData.suites[0].tests
            console.log("%%%%%%%%%%" + tests);
            var finalResult = {};
            for (var i = 0; i < tests.length; i++) {
                var obj = tests[i];
                //From test case name will retrieve the error messages for failed test cases
                if (obj['error']) {
                    //We will check if there is any duplicate error 
                    var exists = Object.values(finalResult).includes(obj['error'])
                    if (!exists) {
                        finalResult[obj['name']] = obj['error']

                    }
                }
            }
            Object.keys(finalResult).forEach(async function (key) {
                // From the above expression we will get the non duplicate failed test case

                var options = {
                    "fields": {
                        "project": {
                            "key": "AWD"  //We need to give only key name of the project 
                        },
                        "summary": key,  //Test Case Name
                        "description": finalResult[key], //Error Message
                        "issuetype": {
                            "name": "Bug"
                        }
                    }

                }
                //For each of the non duplicate failed test case will raised ticket in JIRA
                await jira.addNewIssue(options);

            })

        })


    }
}


export default new JiraReporter();