const logging = process.env.DEBUG ? 'debug' : 'error';
const path = require('path');
const fs = require("fs")
import slackReporter from '../wdio-appium/utils/util.slackRepoting';
const allure = require('allure-commandline');
import { deleteFolder } from '../wdio-appium/utils/function'
import jira from './config/jira';
import emailReporter from '../wdio-appium/utils/emailReporter'
import jiraReporter from './utils/jiraReporter';
import jira from './config/jira';
import { ReportAggregator, HtmlReporter } from 'wdio-html-nice-reporter';
let reportAggregator;


exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //

    //

    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    // Patterns to exclude.

    //You can specify all the test files you want to run
    specs: [
        "./test/*.js",
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    //

    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 2,

    capabilities: [
        //     { "appium:systemPort": "8203",
        //         platformName: "Android",
        //          "appium:deviceName": "Pixel 6 Pro API 33",
        // //         "appium:platformVersion": "11.0",
        //         "appium:automationName": "UIAutomator2",
        //         "appium:app": path.join(process.cwd(), "./app-data/ColorNote+Notepad.apk"),
        //         "appium:autoGrantPermissions": true,
        //         "appium:skipDeviceInitialization": true,
        //         "appium:ignoreHiddenApiPolicyError": true,
        //         "appium:uiautomator2ServerLaunchTimeout":"10000",
        //         "appium:uiautomator2ServerInstallTimeout":"10000"
        //     }, 
        {
            "appium:systemPort": "8203",
            platformName: "Android",
            "appium:udid": "emulator-5554", //for parallel execution device UUID is mandatory
            "appium:platformVersion": "11.0",
            "appium:automationName": "UIAutomator2",
            "appium:app": path.join(process.cwd(), "./app-data/ColorNote+Notepad.apk"),
            "appium:autoGrantPermissions": true,
            "appium:skipDeviceInitialization": true,
            "appium:ignoreHiddenApiPolicyError": true,
            "appium:uiautomator2ServerLaunchTimeout": "10000",
            "appium:uiautomator2ServerInstallTimeout": "10000"

        },
        // {

        //     "appium:systemPort": "8201",
        //      platformName: "Android",
        //     "appium:udid":"emulator-5556",
        //     "appium:platformVersion": "11.0",
        //     "appium:automationName": "UIAutomator2",
        //     "appium:app": path.join(process.cwd(), "./app-data/ColorNote+Notepad.apk"),
        //     "appium:autoGrantPermissions": true,
        //     "appium:skipDeviceInitialization": true,
        //     "appium:ignoreHiddenApiPolicyError": true,
        //     "appium:uiautomator2ServerLaunchTimeout":"10000",
        //     "appium:uiautomator2ServerInstallTimeout":"10000"
        // }
    ],
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',

    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    // baseUrl: 'http://localhost',
    //

    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 240000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723,
                basePath: '/',
            },
            logPath: './'
        }]
    ]
    ,


    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',

    // path: '/wd/hub',

    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    //** We are using Spec reporter, Allure reporter, Json reporter and Html reporter  */
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }], ['json', {
        outputDir: './Results',
        outputFileFormat: function (opts) {
            return `results-${opts.cid}.${opts.capabilities}.json`
        }
    }], ["html-nice", {
        outputDir: './reports/html-reports/',
        filename: 'report.html',
        reportTitle: 'Test Report Title',
        linkScreenshots: true,
        //to show the report in a browser when done
        showInBrowser: true,
        collapseTests: false,
        //to turn on screenshots after every test
        useOnAfterCommandForScreenshot: false,
        //to initialize the logger
        // LOG: log4j.getLogger("default")
    }]

    ],

    mochaOpts: {
        ui: 'bdd',
        //below is the default time executor will wait before closing the exceution
        timeout: 60000
    },


    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities detailst
     * 
     */
    onPrepare: function (config, capabilities) {
        // From the below code we are generating the Html report
        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName: capabilities.browserName,
            collapseTests: true
        });
        //From the below code we are cleaning the reports folder
        reportAggregator.clean();
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {Number} exitCode 0 - success, 1 - fail
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {Number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: async function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            // await jira.raiseIssue()
            //It will take screenshot for all the failed test cases to attach them in diff reporters
            await driver.takeScreenshot();

        }
    },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: async function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {

    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: async function (config, capabilities, specs) {
        //Below expression will automatically generates the allure report
        // const reportError = new Error('Could not generate Allure report')
        // const generation = allure(['generate', 'allure-results', '--clean'])
        // return new Promise((resolve, reject) => {
        //     const generationTimeout = setTimeout(
        //         () => reject(reportError),
        //         5000)

        //     generation.on('exit', function (exitCode) {
        //         clearTimeout(generationTimeout)

        //         if (exitCode !== 0) {
        //             return reject(reportError)
        //         }

        //         console.log('Allure report successfully generated')
        //         resolve()
        //     })
        // })
    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: async function () {
        //Below code will first read the data from JSON reporter file and then retrieve the values we want to pass in our Slack message
        const dir = path.join(process.cwd(), 'Results');
        let finalContent = { "state": {} };
        const read_directory = async dir =>
            fs.readdirSync(dir).reduce((finalContent, file) => {
                const filePath = path.join(dir, file);
                console.log(filePath);
                let content = require(filePath);
                finalContent.state.passed += content.state.passed;
                finalContent.state.failed += content.state.failed;
                finalContent.state.skipped += content.state.skipped;
                // finalContent.state = Object.assign({}, finalContent.state, content.state);
                return finalContent;
            }, { "state": { passed: 0, failed: 0, skipped: 0 } });


        read_directory(dir).then(data => {
            fs.writeFileSync('./FinalJsonReport/result.json', JSON.stringify(data));
        });
        const result = path.join(process.cwd(), './FinalJsonReport/result.json');
        const resultsData = require(result);
        console.log(resultsData);
        let passedTests = resultsData.state.passed
        let failedTests = resultsData.state.failed
        let totalTests = passedTests + failedTests
        const postMsg = `Number of Tests: ${totalTests}\nPassed: ${passedTests}; Failed: ${failedTests};`;
        //Below function of Slack reporter class will send message to Slack channel
        await slackReporter.sendPreMessage(postMsg);
        //Below function will create the html report
        await reportAggregator.createReport();
        //Below function will send post build email with html report attached
        await emailReporter.emailReport();
        //Below function will raise JIra ticket for non duplicate test cases
        await jiraReporter.createJiraTicket();
        // await deleteFolder();
    },

    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
}