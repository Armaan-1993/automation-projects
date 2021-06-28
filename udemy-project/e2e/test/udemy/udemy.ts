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
  it("Test case to open the udemy page and buy all the free courses", async () => {
    await browser.driver.manage().window().maximize();
    let ec = ExpectedConditions;
    await browser.get(browser.baseUrl);
  });
});
