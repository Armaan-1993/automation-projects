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
  suites: {
    //test suite for pipeline
    signup_signin: ['../test/test-cases-for-pipeline/signup-signin.ts'],
    user_creation_deletion: ['../test/test-cases-for-pipeline/user-creation-deletion.ts'],
    milestones: ['../test/test-cases-for-pipeline/milestones.ts'],
    partners: ['../test/test-cases-for-pipeline/partner.ts'],

    //user creation and deletion
    // user_account_creation: [`../test/user-creation-deletion/user-creation.ts`],
    // user_account_deletion: [`../test/user-creation-deletion/user-deletion.ts`],
    //user authentication and account creation
    // signup: ['../test/signup/signup.ts'],
    // signin: ['../test/signin/signin.ts'],
    // resetPassword: ['../test/reset-password/reset-password.ts'],
    //contacts module:
    // add_contacts: ['../test/contacts-lists/add-contacts.ts'],
    // search_contacts: ['../test/contacts-lists/contacts-search.ts'],
    // contact_groups: ['../test/contacts-lists/contact-groups.ts'],
    // contact_filters: ['../test/contacts-lists/contacts-filters.ts'],
    // sort_contacts: ['../test/contacts-lists/contacts-sort.ts'],
    // contacts_csv: [`../test/contacts-lists/contacts-csv.ts`],
    // role_based_contacts: [`../test/contacts-lists/role-based-contacts-list.ts`],
    //partner module:
    // add_partner: [`../test/partners/add-partner.ts`],
    // upload_csv: [`../test/partners//create-csv.ts`],
    // search_partner: [`../test/partners/search-partners.ts`],
    // edit_partner: [`../test/partners/edit-partner.ts`],
    // view_partner: [`../test/partners/view-partner.ts`],
    // lead_partner: [`../test/partners/lead-partner.ts`],
    // custom_messages: [`../test/partners/partner-custom-messages.ts`],
    // delete_partner: [`../test/partners/delete-partners.ts`],
    // role_based_partners: [`../test/partners/role-based-partner.ts`],
    drip_15: ['../../e2e/test/drip/drip15.ts'],
    enterprise_15: ['../../e2e/test/enterprise/enterprise15.ts'],
    // dripListing: [
    //   '../../e2e/test/drip/dripListing.ts',
    //   '../../e2e/test/drip/dripListingFilterUserRole.ts',
    //   '../../e2e/test/drip/dripListingShareCopy.ts',
    // ],
    // addDripdetails: [
    //   '../../e2e/test/drip/addDripvalidations.ts',
    //   '../../e2e/test/drip/addDripvalidations1.ts',
    //   '../../e2e/test/drip/addDripvalidations2.ts',
    //   '../../e2e/test/drip/addDripvalidations3.ts',
    // ],
    // matrix: [
    //   '../../e2e/test/matrix/matrix.ts',
    //   '../../e2e/test/matrix/matrixroll.ts'
    // ],
    // enterprise: [
    //   // '../../e2e/test/enterprise/enterprise.ts',
    //   '../../e2e/test/enterprise/teamspage.ts',
    //   // '../../e2e/test/enterprise/adminPage.ts',
    //   // '../../e2e/test/enterprise/teamslead.ts',
    //   // '../../e2e/test/enterprise/manager.ts',
    //   // '../../e2e/test/enterprise/mo.ts',
    //   // '../../e2e/test/enterprise/multipleteam.ts',
    // ],
    // customfield: [
    //   '../../e2e/test/drip/customfield.ts',
    //   '../../e2e/test/drip/customfielduser.ts'
    // ],
    // dates: ['../../e2e/test/milestone/dates.ts'],
    // relations: ['../../e2e/test/relations/relations.ts'],
    // edit_task: [`../test/tasks/tasks-list/edit-tasks.ts`],
    // date_based_filter: [`../test/tasks/tasks-list/date-based-filter.ts`],
    // general_filter: [`../test/tasks/tasks-list/general-filter.ts`],
    // sorting_tasks: [`../test/tasks/tasks-list/sorting-tasks.ts`],
    // role_based_tasks: [`../test/tasks/tasks-list/role-based-tasks.ts`],
    //tasks:
    // add_task: ['../test/tasks/tasks-list/add-tasks.ts'],
    // edit_task: [`../test/tasks/tasks-list/edit-tasks.ts`],
    // date_based_filter: [`../test/tasks/tasks-list/date-based-filter.ts`],
    // general_filter: [`../test/tasks/tasks-list/general-filter.ts`],
    // sorting_tasks: [`../test/tasks/tasks-list/sorting-tasks.ts`],
    // role_based_tasks: [`../test/tasks/tasks-list/role-based-tasks.ts`],
    //milestone
    // milestone_prospect_form: [`../test/milestone/milestone-prospect-from.ts`],
    // milestones_in_process_purchase_form: [`../test/milestone/milestone-in-process-purchase-form.ts`],
    // milestones_in_process_refinance_form: [`../test/milestone/milestone-in-process-refinance-form.ts`],
    // milestones_purpose_transaction: [`../test/milestone/milestones-purpose-transaction.ts`],
    // role_based_milestones_small_enterprise: [`../test/milestone/role-based-small-enterprise.ts`],
    // role_based_milestones_large_enterprise: [`../test/milestone/role-based-large-enterprise.ts`],
    // contacts_module: ['../test/contacts-page/contacts.ts'],
    // transaction_module: ['../test/transaction/transaction.ts'],
    // transactionContactFlow: [`../test/transaction/transactionContactFlow.ts`],

    contacts_15mins: [`../test/contacts-page/contacts_15_min.ts`],
    transaction_15mins: [`../test/csvDownloadCheck/customfields_15mins.ts`],
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 3,
    chromeOptions: {
      // args: ['--headless', '--disable-gpu'],
      // args: ["--window-size=1366,768"]
      args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--headless',
        '--disable-gpu',
        '--window-size=1920,1080',
      ],
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
