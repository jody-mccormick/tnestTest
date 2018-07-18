// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  // Specs in each suite should be placed in the order you wish the tests to run.
  specs: [
    '../specs/createClient.spec.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': false,
    'chromeOptions': {
      args: [
        // '--headless', 
        '--disable-gpu',
        '--window-size=1366x768'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'https://jodymccormick.theranest.com/',
  framework: 'jasmine2',
  allScriptsTimeout: 5 * 60000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3 * 60000,
    print: function() {}
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
