import { browser, by, element, ExpectedConditions, $, $$ } from 'protractor';
import { Milestones } from '../../pages/milestone.po';

describe('Settings Milestone Page', () => {
  let milestones: Milestones;

  beforeAll(() => {
    browser.restart();
    milestones = new Milestones();
  });
  afterAll(() => {
    browser.close();
    console.log('[Settings Milestone Module - Milestones In Prospect Form]');
  });

  //Test cases for PROSPECT FORM

  it('MSP 001 - Test case to try and add a milestone without inputting any data in any of the fields', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //function to login to the app
    await milestones.loginToAppfunction();
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //click the "add milestones"  button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    await browser.sleep(2000);
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(2000);
    //click on the "save milestones" button
    browser.wait(() => ec.presenceOf(milestones.saveMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.saveMilestonesBtn), 20000);
    browser.wait(() => milestones.saveMilestonesBtn.isPresent(), 10000);
    browser.wait(() => milestones.saveMilestonesBtn.isDisplayed(), 10000);
    browser.wait(() => ec.elementToBeClickable(milestones.saveMilestonesBtn), 10000);
    await milestones.saveMilestonesBtn.click();
    await browser.sleep(6000);
    //click on the "Yes" button to confirm
    browser.wait(() => ec.presenceOf(milestones.saveMilestonesYesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.saveMilestonesYesBtn), 40000);
    browser.wait(() => milestones.saveMilestonesYesBtn.isPresent(), 40000);
    browser.wait(() => milestones.saveMilestonesYesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.saveMilestonesYesBtn), 40000);
    await milestones.saveMilestonesYesBtn.click();
    //expect function for status name missing
    let noStatusName = element.all(by.css('.status-name-missing-error')).get(1);
    browser.wait(() => ec.presenceOf(noStatusName), 40000);
    browser.wait(() => ec.visibilityOf(noStatusName), 40000);
    browser.wait(() => noStatusName.isPresent(), 40000);
    browser.wait(() => noStatusName.isDisplayed(), 40000);
    expect(await noStatusName.getText()).toEqual('Status name cannot be empty!');
  });

  it('MSP 002 - Test case to input space into the "status name" input field and check if a milestone can be added', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(2000);
    //click the "add milestones"  button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    await browser.sleep(4000);
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    await milestones.statusNameInput.sendKeys('       ');
    await browser.sleep(4000);
    //click on the "save milestones" button
    browser.wait(() => ec.presenceOf(milestones.saveMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.saveMilestonesBtn), 20000);
    browser.wait(() => milestones.saveMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.saveMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.saveMilestonesBtn), 20000);
    await milestones.saveMilestonesBtn.click();
    //click on the "Yes" button to confirm
    browser.wait(() => ec.presenceOf(milestones.saveMilestonesYesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.saveMilestonesYesBtn), 20000);
    browser.wait(() => milestones.saveMilestonesYesBtn.isPresent(), 20000);
    browser.wait(() => milestones.saveMilestonesYesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.saveMilestonesYesBtn), 20000);
    await milestones.saveMilestonesYesBtn.click();
    //expect function for status name missing
    let noStatusName = element.all(by.css('.status-name-missing-error')).get(1);
    browser.wait(() => ec.presenceOf(noStatusName), 20000);
    browser.wait(() => ec.visibilityOf(noStatusName), 20000);
    browser.wait(() => noStatusName.isPresent(), 20000);
    browser.wait(() => noStatusName.isDisplayed(), 20000);
    expect(await noStatusName.getText()).toEqual('Status name cannot be empty!');
  });

  it('MSP 003 - Test case to input special characters into the "status name" input field and check if a milestone can be added', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(2000);
    //click the "add milestones"  button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    await browser.sleep(4000);
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 10000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 10000);
    await milestones.statusNameInput.sendKeys('#@$$@@$@$');
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 20000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 20000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('#@$$@@$@$');
  });

  it('MSP 004 - Test case to try and add a milestone with a status name and not inputing values of any of the other fields', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(2000);
    //click the "add milestones" button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    await milestones.statusNameInput.sendKeys('New Status');
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('New Status');
  });

  it('MSP 005 - Test case to try and add a new milestone with the same status name as of an existing milestone', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(2000);
    //click the "add milestones" button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    // Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    await milestones.statusNameInput.sendKeys('New Status');
    //click on the "save milestones" button
    browser.wait(() => ec.presenceOf(milestones.saveMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.saveMilestonesBtn), 20000);
    browser.wait(() => milestones.saveMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.saveMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.saveMilestonesBtn), 20000);
    await milestones.saveMilestonesBtn.click();
    //click on the "Yes" button to confirm
    browser.wait(() => ec.presenceOf(milestones.saveMilestonesYesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.saveMilestonesYesBtn), 20000);
    browser.wait(() => milestones.saveMilestonesYesBtn.isPresent(), 10000);
    browser.wait(() => milestones.saveMilestonesYesBtn.isDisplayed(), 10000);
    browser.wait(() => ec.elementToBeClickable(milestones.saveMilestonesYesBtn), 10000);
    await milestones.saveMilestonesYesBtn.click();
    //expect function for an already existing milestone with similar status name
    let milestoneExists = element.all(by.css('.milestone-already-exists')).get(1);
    browser.wait(() => ec.presenceOf(milestoneExists), 20000);
    browser.wait(() => ec.visibilityOf(milestoneExists), 20000);
    browser.wait(() => milestoneExists.isPresent(), 10000);
    browser.wait(() => milestoneExists.isDisplayed(), 10000);
    expect(await milestoneExists.getText()).toEqual('Name already exists');
  });

  it(`MSP 006 - Test case to input only the status name and then select a checkbox from the actions dropdown and to try and a milestone`, async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    //click the "add milestones" button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 40000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 40000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 40000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 40000);
    await milestones.statusNameInput.sendKeys('Milestone with only action');
    await browser.sleep(2000);
    //function to select checkbox items from the actions dropdown
    await milestones.actionDropdownSelectFunction1();
    await browser.sleep(3000);
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 40000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 40000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 10000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 10000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('Milestone with only action');
  });

  it('MSP 007 - Test case to input only the status name and then select a checkbox from the "share with" dropdown and to try and a milestone', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    //click the "add milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    await milestones.statusNameInput.sendKeys('Milestone with only share with');
    await browser.sleep(2000);
    //function to select the 'share with' dropdown form milestones form and check the required checkboxes
    await milestones.shareWithDropdownSelectFunction1();
    await browser.sleep(2000);
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 40000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 40000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 40000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 40000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('Milestone with only share with');
  });

  it('MSP 009 - Test case to select different options from the milestones templates available in the "action" dropdown', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //click the "add milestones"  button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 40000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 40000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 40000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 40000);
    await milestones.statusNameInput.sendKeys('Milestone with templates');
    await browser.sleep(2000);
    //function to select different options from the templates in the "action" dropdown
    await milestones.selectTemplatesFromActions();
    await browser.sleep(3000);
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('Milestone with templates');
  });

  it('MSP 010 - Test case to add a new milestone and move it to a different position in the list of milestones', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(2000);
    //click the "add milestones" button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    // function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //Inputting space into the "status name" field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    await milestones.statusNameInput.sendKeys('Milestone to drag and drop');
    await browser.sleep(2000);
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    // click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('Milestone to drag and drop');
    await browser.sleep(2000);
    //function to drag and drop a milestone from its initial position to a different posiiton
    await milestones.dragAndDropMilestone();
    await browser.sleep(3000);
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    // function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).not.toEqual('Milestone to drag and drop');
  });

  it('MSP 011 - Test case to create a new milestone with the required proper credentials', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    //click the "add milestones"  button
    browser.wait(() => ec.presenceOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => ec.visibilityOf(milestones.addMilestonesBtn), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isPresent(), 20000);
    browser.wait(() => milestones.addMilestonesBtn.isDisplayed(), 20000);
    browser.wait(() => ec.elementToBeClickable(milestones.addMilestonesBtn), 20000);
    await milestones.addMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    //input data into the status field
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 40000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 40000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 40000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 40000);
    await milestones.statusNameInput.sendKeys('In Progress');
    await browser.sleep(2000);
    //function to select checkbox items from the actions dropdown
    await milestones.actionDropdownSelectFunction();
    await browser.sleep(3000);
    //function to select the 'share with' dropdown form milestones form and check the required checkboxes
    await milestones.shareWithDropdownSelectFunction();
    await browser.sleep(2000);
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    await browser.sleep(3000);
    //expect function for the newly added milestone
    browser.wait(() => ec.presenceOf(milestones.statusNameInput), 20000);
    browser.wait(() => ec.visibilityOf(milestones.statusNameInput), 20000);
    browser.wait(() => milestones.statusNameInput.isPresent(), 20000);
    browser.wait(() => milestones.statusNameInput.isDisplayed(), 20000);
    expect(await milestones.statusNameInput.getAttribute('ng-reflect-model')).toEqual('In Progress');
  });

  it('MSP 012 - Test case to click on the delete bin button to delete all the inputted data and then save the milestone', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    //function to click on the delete bin button and clear all the inputs in the dropdowns
    await milestones.clearDropdownInputsFunction();
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
  });

  it(`MSP 013 - Test case to click on the "+" button and add another field of inputs along with the existing input fields`, async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    //function to click on the "+" button to add another row of dropdown input fields
    await milestones.addExtraDropdownFieldsFunc();
    await browser.sleep(2000);
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
  });

  it('MSP 014 - Test case to delete a milestone', async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    //navigate to dashboard page
    await browser.get('/dashboard');
    await browser.sleep(5000);
    //function to select the settings button on the side panel bar and then select the milestones page from the settings menu
    await milestones.milestonesPageFunction();
    //click on the "edit milestones" button
    browser.wait(() => ec.presenceOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => ec.visibilityOf(milestones.editMilestonesBtn), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isPresent(), 40000);
    browser.wait(() => milestones.editMilestonesBtn.isDisplayed(), 40000);
    browser.wait(() => ec.elementToBeClickable(milestones.editMilestonesBtn), 40000);
    await milestones.editMilestonesBtn.click();
    // function to scroll to the bottom of the page to the last added milestone
    await milestones.scrollDownToBottomFunction();
    await browser.sleep(3000);
    //function to delete first milestone
    await milestones.deleteMilestoneFunction();
    //function to delete second milestone
    await milestones.deleteMilestoneFunction();
    //function to delete third milestone
    await milestones.deleteMilestoneFunction();
    //function to delete fourth milestone
    await milestones.deleteMilestoneFunction();
    //function to delete fifth milestone
    await milestones.deleteMilestoneFunction();
    //function to delete sixth milestone
    await milestones.deleteMilestoneFunction();
    //function to delete seventh milestone
    await milestones.deleteMilestoneFunction();
    //function to click on the "save milestones" button ,confirm and to save a milestone
    await milestones.saveMilestoneFunction();
    //to scroll down back to the newly added milestone to check the expect condition
    await milestones.scrollDownToBottomFunction();
  });
});
