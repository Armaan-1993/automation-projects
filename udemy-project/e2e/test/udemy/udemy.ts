import { browser, by, element, ExpectedConditions, $, $$ } from "protractor";
import { Udemy } from "../../pages/udemy.po";

describe("Test case to browse through free udemy courses and buy them", () => {
  let udemy: Udemy;

  beforeAll(() => {
    browser.restart();
    udemy = new Udemy();
  });
  afterAll(() => {
    browser.close();
    console.log("[Udemy Courses]");
  });
});
