const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'https://localhost:4444/wd/hub',
  directConnect: true,
  capabilities: {
    browserName: "chrome",
  },
  suites: {
    specs: ['../../e2e/test/reset-password/reset-password.ts'],
    addDripvalidations: ['../../e2e/test/drip/addDripvalidations.ts'],
  },
  getPageTimeout: 12000,
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 1440000
  },
  onPrepare: async () => {
    require("ts-node").register({
      project: "../tsconfig.json"
    });
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots',
        screenshotsFolder: 'images',
        takeScreenshots: true
      })
    );
  }
};

