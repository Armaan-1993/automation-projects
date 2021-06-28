const { SpecReporter, StacktraceOption } = require("jasmine-spec-reporter");
var path = require("path");
var downloadsPath = path.resolve(__dirname, `../downloads/`);
let mailID;
let createMailID = () => {
  const timeStamp = new Date().getTime();
  mailID = `automation${timeStamp}@mailinator.com`;
  return mailID;
};
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 120000,
  suites: {
    //udemy project
    udemy_project: ["../test/udemy/udemy.ts"],
  },
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      // args: ['--headless', '--disable-gpu'],
      // args: ["--window-size=1366,768"]
      //   args: [
      //     '--use-fake-ui-for-media-stream',
      //     '--use-fake-device-for-media-stream',
      //     '--headless',
      //     '--disable-gpu',
      //     '--window-size=1920,1080',
      //   ],
      prefs: {
        download: {
          directory_upgrade: true,
          prompt_for_download: false,
          default_directory: downloadsPath,
        },
      },
    },
  },

  displayStacktrace: true,
  getPageTimeout: 34000,
  useAllAngular2AppRoots: true,
  directConnect: true,
  baseUrl: "https://www.google.com/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    print: function () {},
    defaultTimeoutInterval: 1440000,
  },

  params: {
    userEmail: createMailID(),
  },

  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "../tsconfig.json"),
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.NONE,
        },
      }),
    );
  },
};
