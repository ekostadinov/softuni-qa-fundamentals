/* eslint func-names:0, prefer-arrow-callback: off */
var myStepDefinitionsWrapper = function () { // eslint-disable-line
  this.Given(/^I visit webpage "([^"]*)"$/, function (url) {
    browser.windowHandleMaximize();
    browser.url(url);
  });

  // FIXME refactor to DSL
  this.When(/^I visit QA Fundamentals course page$/, function () {
    const homePageNavTrainingsLink = '//li/a/span[text()="Обучения"]';
    browser.waitForVisible(homePageNavTrainingsLink, 5000);
    browser.click(homePageNavTrainingsLink);

    const homePageNavQaFundamentalsLink = '//li/a[text()="QA Fundamentals - януари 2017"]';
    browser.waitForVisible(homePageNavQaFundamentalsLink, 5000);
    browser.click(homePageNavQaFundamentalsLink);
  });

  this.When(/^I visit "([^"]*)"$/, function (url) {
    browser.url(url);
  });

  this.When(/^I change language$/, function () {
    const eng_link = '//a[text()="English"]';

    browser.execute(function() {
      return window.scroll(0, 1000000);
      //return window.document.getElementsByClassName('lang-switch-label')[1].click();
    });

    browser.waitForExist(eng_link, 5000);
    browser.waitForVisible(eng_link, 5000);
    browser.click(eng_link);
  });

  this.Then(/^I see the title of "([^"]*)"$/, function (title) {
    expect(browser.getTitle()).toEqual(title);
  });

  this.Then(/^I see that the title contains "([^"]*)"$/, function (title) {
    expect(browser.getTitle()).toContain(title);
  });

  this.Then(/^I see that the course title contains "([^"]*)"$/, function (text) {
    const coursePageTrainingTitle = 'h2.content-title';
    browser.waitForVisible(coursePageTrainingTitle, 5000);
    expect(browser.getText(coursePageTrainingTitle)).toContain(text);
  });

  this.Then(/^I want to see lecturer name$/, function () {
    // const lecturerName = 'Евгени Костадинов';
    browser.waitForVisible('//a[@class="user-name"]', 5000);
    expect(browser.getText('//a[@class="user-name"]')).toContain('Евгени');
  });

  this.Then(/^I should see that resources are with new names$/, function () {
    const resources_link = '//a[@href="/trainings/resources"]';

    browser.waitForExist(resources_link, 5000);
    browser.waitForVisible(resources_link, 5000);

    expect(browser.getText(resources_link)).toEqual('Resources');
  });
};
module.exports = myStepDefinitionsWrapper;
