import { element, by, browser, ElementFinder, ExpectedConditions, $, $$ } from 'protractor';
export class User {
  //variables for sign up info
  firstName?: ElementFinder;
  lastName?: ElementFinder;
  mobilePhone?: ElementFinder;
  email?: ElementFinder;
  companyName?: ElementFinder;
  pswrd?: ElementFinder;
  confirmPswrd?: ElementFinder;
  agreementCheckboxLabel?: ElementFinder;
  agreementCheckbox?: ElementFinder;
  signupBtn?: ElementFinder;
  //variables for successfull signup
  signUpSuccessful?: ElementFinder;
  //variables for onboardingn page
  skipBtn?: ElementFinder;
  planConfirmCheckbox?: ElementFinder;
  planConfirmBtn?: ElementFinder;
  //variables for admin panel SIGN IN page
  adminPanelEmailId?: ElementFinder;
  adminPanelPsrwd?: ElementFinder;
  adminPanelSignInBtn?: ElementFinder;
  enterpriseListBtn?: ElementFinder;
  searchInput?: ElementFinder;
  //variables for plan confirm page
  confirmPlanBtn?: ElementFinder;
  planAgreementCheckbox?: ElementFinder;
  //variables for payment page
  cardNumberInput?: ElementFinder;
  cardExpirationDate?: ElementFinder;
  cardCvc?: ElementFinder;
  payNowBtn?: ElementFinder;
  //variables for area code page
  areaCodeInput?: ElementFinder;
  confirmNumberBtn?: ElementFinder;
  //variables for mail integration page
  skipEmailSetupBtn?: ElementFinder;
  //variables for drip, milestones setup page
  loadSampleMilestonesCheckbox?: ElementFinder;
  getStartedBtn?: ElementFinder;

  constructor() {
    //variables for Signup info
    this.firstName = element(by.css("input[formcontrolname='firstName']"));
    this.lastName = element(by.css("input[formcontrolname='lastName']"));
    this.mobilePhone = element(by.css("input[formcontrolname='phoneNo']"));
    this.email = element(by.css("input[formcontrolname='userEmail']"));
    this.companyName = element(by.css("input[formcontrolname='companyName']"));
    this.pswrd = element(by.css("input[formcontrolname='userPassword']"));
    this.confirmPswrd = element(by.css("input[formcontrolname='reuserPassword']"));
    this.agreementCheckbox = element(by.css('.form-group.pt-2'))
      .element(by.css('.form-check.pl-0'))
      .element(by.css('.d-flex'))
      .element(by.css('.v2-checkbox.mb-0'))
      .element(by.css('.checkmark'));
    this.signupBtn = element(by.partialButtonText('SIGN UP'));
    //variables for successful signup
    this.signUpSuccessful = element(by.css('.alert.alert-success'));
    this.skipBtn = element(by.css('.btn.btn-secondary.w-50.ng-star-inserted'));
    this.planConfirmCheckbox = element(by.css('.d-flex.mb-4'))
      .element(by.tagName('label'))
      .element(by.css('.checkmark'));
    this.planConfirmBtn = element(by.css('.btn. btn-primary w-100'));
    //variables for admin panel SIGN IN page
    this.adminPanelEmailId = element.all(by.css('.form-group')).get(0).element(by.css("input[type='email']"));
    this.adminPanelPsrwd = element.all(by.css('.form-group')).get(1).element(by.css("input[type='password']"));
    this.adminPanelSignInBtn = element
      .all(by.css('.form-group'))
      .get(2)
      .element(by.css('.btn.btn-primary.btn-lg.btn-block.p-3'));
    this.enterpriseListBtn = element(by.css('.d-flex.justify-content-between.flex-column.flex-md-row.li-st-div'))
      .element(by.css('.d-flex.align-items-baseline.font-hn-medium'))
      .all(by.css('.btn.font-lato-bold.slect-btn'))
      .get(1);
    this.searchInput = element(by.css('#free-li-searchstyle')).element(by.tagName('input'));
    //variables for plan confirm page
    this.confirmPlanBtn = element(by.css('.btn.btn-primary.w-100'));
    this.planAgreementCheckbox = element(by.css('.d-flex.mb-4'))
      .element(by.css('.v2-checkbox.mb-0'))
      .element(by.tagName('span'));
    //variables for payment page
    this.cardNumberInput = element(by.css('input[name="cardnumber"]'));
    this.cardExpirationDate = element(by.css('input[name="exp-date"]'));
    this.cardCvc = element(by.css("input[name='cvc']"));
    this.payNowBtn = element(by.css('.btn.btn-primary.mt-4.mb-5.w-100'));
    //variables for area code page
    this.areaCodeInput = element(by.css("input[formcontrolname='areaCode']"));
    this.confirmNumberBtn = $('.btn.btn-primary.mt-5.mb-5.w-100.ng-star-inserted');
    //variables for mail integration page
    this.skipEmailSetupBtn = element(by.css('.cursor-pointer.font-15'));
    //variables for drip, milestones setup page
    this.loadSampleMilestonesCheckbox = element(by.css("input[name='load_milestone']"));
    this.getStartedBtn = element(by.css('.gmail-text.cursor-pointer.pt-3'));
  }

  //function to navigate to signup page
  navigateToSignup = async (): Promise<ElementFinder> => {
    await browser.waitForAngularEnabled(false);
    return browser.get('/signup');
  };

  //function to return current url
  getCurrentUrl = async (): Promise<any> => {
    return browser.getCurrentUrl();
  };

  changedUrl = async (url): Promise<any> => {
    return function () {
      return browser.getCurrentUrl().then(function (myUrl) {
        return !myUrl.includes(url);
      });
    };
  };

  //function to select time zone of the new user
  selectTimeZoneFunctiom = async (): Promise<ElementFinder> => {
    //to click on the timezone dropdown and open it
    let timeZone = element(by.css("select[formcontrolname='timezone']"));
    browser.wait(() => ExpectedConditions.presenceOf(timeZone), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(timeZone), 20000);
    browser.wait(() => timeZone.isPresent(), 20000);
    browser.wait(() => timeZone.isDisplayed(), 20000);
    await timeZone.click();
    //to select the time zone from the options
    let timeZoneSelected = timeZone.element(by.css('option[value="Kolkata +05:30"]'));
    browser.wait(() => ExpectedConditions.presenceOf(timeZoneSelected), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(timeZoneSelected), 20000);
    browser.wait(() => timeZoneSelected.isPresent(), 20000);
    browser.wait(() => timeZoneSelected.isDisplayed(), 20000);
    await timeZoneSelected.click();
  };

  //function to select time from "Growth" dropdown
  selectGrowthDropdownFunction = async (): Promise<ElementFinder> => {
    let growthDropdown = element(by.css('.d-flex.justify-content-center.mt-3.w-650'))
      .all(by.tagName('div'))
      .get(0)
      .element(by.css('.header-card.w-100'))
      .element(by.css('.pb-3.pt-3.d-flex.justify-content-center.w-100.ng-star-inserted'))
      .element(by.css('.w-50.ng-star-inserted'))
      .element(by.tagName('select'))
      .all(by.tagName('option'))
      .get(1);
    browser.wait(() => ExpectedConditions.presenceOf(growthDropdown), 80000);
    browser.wait(() => ExpectedConditions.visibilityOf(growthDropdown), 80000);
    browser.wait(() => growthDropdown.isPresent(), 80000);
    browser.wait(() => growthDropdown.isDisplayed(), 80000);
    await growthDropdown.click();
  };

  //function redirect to the admin page
  redirectToAdminPage = async (): Promise<any> => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://mortgage-admin-dev.firebaseapp.com/login');
    let signInText = element(by.css('.btn.btn-primary.btn-lg.btn-block.p-3'));
    //to write expect condition for SIGN IN button
    browser.wait(() => ExpectedConditions.presenceOf(signInText), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(signInText), 20000);
    browser.wait(() => signInText.isPresent(), 20000);
    browser.wait(() => signInText.isDisplayed(), 20000);
    //expect condition for admin page sign in text
    expect(await signInText.getText()).toEqual('SIGN IN');
  };

  //function to delete the user account
  deleteUserAccountFunction = async (): Promise<ElementFinder> => {
    //to locate the user to be deleted
    let user = element(by.css('.table.table-striped.table-hover'))
      .element(by.css('.table-body'))
      .all(by.css('#free-li-tableBodyRow'))
      .get(0);
    browser.wait(() => ExpectedConditions.presenceOf(user), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(user), 20000);
    browser.wait(() => user.isPresent(), 20000);
    browser.wait(() => user.isDisplayed(), 20000);
    //to click on the "DELETE ACCOUNT" button
    let useDeleteBtn = user
      .all(by.tagName('td'))
      .get(4)
      .element(by.css('.d-flex'))
      .element(by.css('.btn.ml-2.free-li-delete-activeBtn'));
    browser.wait(() => ExpectedConditions.presenceOf(useDeleteBtn), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(useDeleteBtn), 20000);
    browser.wait(() => useDeleteBtn.isPresent(), 20000);
    browser.wait(() => useDeleteBtn.isDisplayed(), 20000);
    await useDeleteBtn.click();
    await browser.sleep(2000);
    //to input delete text
    let deleteText = element(by.css('.confirmationConform'))
      .element(by.css('#confirmationConformBody'))
      .all(by.tagName('div'))
      .get(1)
      .element(by.tagName('input'));
    browser.wait(() => ExpectedConditions.presenceOf(deleteText), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(deleteText), 20000);
    browser.wait(() => deleteText.isPresent(), 20000);
    browser.wait(() => deleteText.isDisplayed(), 20000);
    await deleteText.sendKeys('delete');
    await browser.sleep(2000);
    //to click on the "Yes" button to confirm delete
    let yesBtn = element(by.css('.confirmationConform'))
      .element(by.css('#confirmationConformBody'))
      .element(by.css('.mt-2.pt-4.d-flex.justify-content-between'))
      .element(by.partialButtonText('Yes'));
    browser.wait(() => ExpectedConditions.presenceOf(yesBtn), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(yesBtn), 20000);
    browser.wait(() => yesBtn.isPresent(), 20000);
    browser.wait(() => yesBtn.isDisplayed(), 20000);
    await yesBtn.click();
    await browser.sleep(2000);
    //expect conditon for user deleted
    let deletedExpectPopup = element(by.css('.Toastify__toast-body'));
    browser.wait(() => ExpectedConditions.presenceOf(deletedExpectPopup), 80000);
    browser.wait(() => ExpectedConditions.visibilityOf(deletedExpectPopup), 80000);
    browser.wait(() => deletedExpectPopup.isPresent(), 80000);
    browser.wait(() => deletedExpectPopup.isDisplayed(), 80000);
    //expect function for user successfully deleted popup
    expect(await deletedExpectPopup.getText()).toEqual('Account Deletion process initiated successfully');
  };

  //function to select a phone number from the list of phone numbers in the area code page
  selectPhoneNumberFunction = async (): Promise<ElementFinder> => {
    //expect condition for "select phone number" popup
    let selectPhonePopup = element(by.css('.font-12.error.ng-star-inserted'));
    browser.wait(() => ExpectedConditions.presenceOf(selectPhonePopup), 50000);
    browser.wait(() => ExpectedConditions.visibilityOf(selectPhonePopup), 50000);
    browser.wait(() => selectPhonePopup.isPresent(), 50000);
    browser.wait(() => selectPhonePopup.isDisplayed(), 50000);
    let text = (await selectPhonePopup.getText()).trim().toLowerCase();
    expect(text).toEqual('*select a mobile phone');
    await browser.sleep(3000);
    let phoneNumber = element(by.css("select[formcontrolname='select']")).$$('option').get(1);
    browser.wait(() => ExpectedConditions.presenceOf(phoneNumber), 20000);
    browser.wait(() => ExpectedConditions.visibilityOf(phoneNumber), 20000);
    browser.wait(() => phoneNumber.isPresent(), 20000);
    browser.wait(() => phoneNumber.isDisplayed(), 20000);
    await phoneNumber.click();
    //   await element(by.css("select[formcontrolname='select']"))
    //     .all(by.tagName('option'))
    //     .filter(async (elm) => {
    //       const isDisplayed = await elm.isDisplayed();
    //       return isDisplayed;
    //     })
    //     .first()
    //     .click();
    //   await browser.sleep(5000);
  };
}
