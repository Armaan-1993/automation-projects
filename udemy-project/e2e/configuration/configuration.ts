// @ts-check
// Protractor configuration file, see link for more information

// https://github.com/angular/protractor/blob/master/lib/config.ts
const { SpecReporter } = require('jasmine-spec-reporter');
var path = require('path');
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

  // specs: [
  // '../test/signup/signup.ts','../test/signin/signin.ts', '../test/reset-password/reset-password.ts','../test/contacts page/contacts.ts',
  // ] ,
  // specs: [
  // '../test/contacts page/contacts.ts'
  // ]
  // suites: {
  // signup_signin_resetpassword: [
  // '../test/signup/signup.ts','../test/signin/signin.ts', '../test/reset-password/reset-password.ts',
  // ],
  // contacts_module: [
  // '../test/contacts page/contacts.ts'
  // ],
  suites: {
    // signup: ['../test/signup/signup.ts',],
    // signin: ['../test/signin/signin.ts',],
    // resetPassword: ['../test/reset-password/reset-password.ts'],
    //contacts module:
    // add_contacts: ['../test/contacts-lists/add-contacts.ts'],
    // search_contacts: ['../test/contacts-lists/contacts-search.ts'],
    // contact_groups: ['../test/contacts-lists/contact-groups.ts'],
    // contact_filters: ['../test/contacts-lists/contacts-filters.ts'],
    // sort_contacts: ['../test/contacts-lists/contacts-sort.ts'],
    contact: ['../test/contacts-page/contacts.ts'],
    // communication: ['../test/communication_module/communication.ts'],
    // communication_RoleBased_SLO_JLO_MLO: ['../test/communication_module/SLO_JLO_MLO_roleBasedcommunication.ts'],
    // communication_Enterprise: ['../test/communication_module/EnterpriseStructure_Communication_Flow_Email.ts','../test/communication_module/EnterpriseStructure_Communication_Flow_Call.ts', '../test/communication_module/EnterpriseStructure_Communication_Flow_message.ts']
    //partner module:
    // partner_groups: [`../test/partners/partner-groups.ts`],
    // transactionModule: [`../test/transaction/transaction.ts`],
    // roleBasedTransaction: [`../test/transaction/roleBasedTransaction.ts`],
    // calendarModule: [`../test/calendar/calendar.ts`],
    // contact_taskFlow: [`../test/contacts-page/contact_task_flow.ts`],
    // contact_taskFlow_Assignee: [`../test/contacts-page/contact_task_flow_assignee.ts`],
    // calendar_contact_TaskList: [`../test/calendar/calendar_contact_tasklist.ts`],
    // calendar_contact_TaskList_Assignee: [`../test/calendar/calendar_contact_task_assignee.ts`],
    // transactionContactFlow: [`../test/transaction/transactionContactFlow.ts`],
    // agentsinMultiple: [`../test/agentsCreatedinMultipleTeams/agentsinMultiple.ts`],// working
    // dripagent: [`../test/driptest/driptest.ts`],//working
    // downloadCSV: [`../test/csvDownloadCheck/csvDownloadCheck.ts`],//working
    // customfield: [`../test/csvDownloadCheck/customfieldcheck.ts`],// working
    // nurture: [`../test/dashboard/nurture.ts`]//working
    //// test: [`../test/transaction/test.ts`]

    // ashik's
    specs: ['../../e2e/test/reset-password/reset-password.ts'],
    endtoend: ['../test/signin/signin.ts', '../test/reset-password/reset-password.ts'],
    // addDripvalidations: ['../../e2e/test/drip/addDripvalidations.ts'],
    // specs: ['../../e2e/test/reset-password/reset-password.ts'],
    // endtoend: ['../test/signin/signin.ts', '../test/reset-password/reset-password.ts'],
    // addDripvalidations: ['../../e2e/test/drip/addDripvalidations.ts'],
    dripListing: [
      '../../e2e/test/drip/dripListing.ts',
      '../../e2e/test/drip/dripListingFilterUserRole.ts',
      '../../e2e/test/drip/dripListingShareCopy.ts',
    ],
    // customfield: ['../../e2e/test/drip/customfield.ts'],
    // customfielduser: ['../../e2e/test/drip/customfielduser.ts'],
    // enterprise: ['../../e2e/test/enterprise/enterprise.ts'],
    // teamPage: ['../../e2e/test/enterprise/teamspage.ts'],
    // adminPage: ['../../e2e/test/enterprise/adminPage.ts'],
    // teamslead: ['../../e2e/test/enterprise/teamslead.ts'],
    // manager: ['../../e2e/test/enterprise/manager.ts'],
    // mo: ['../../e2e/test/enterprise/mo.ts'],
    // matrix: ['../../e2e/test/matrix/matrix.ts'],
    // matrixroll: ['../../e2e/test/matrix/matrixroll.ts'],
    // dates: ['../../e2e/test/milestone/dates.ts'],
    // relations: ['../../e2e/test/relations/relations.ts'],
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      // args: ["--headless", "--disable-gpu", "--window-size=800,600"]
      // args: ["--window-size=1366,768"]
      args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
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
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
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
    require('ts-node').register({
      project: require('path').join(__dirname, '../tsconfig.json'),
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true,
        },
      })
    );
  },
};
