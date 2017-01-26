var myStepDefinitionsWrapper = function () {
  this.Given(/^I visit webpage "([^"]*)"$/, function (url) {
    browser.windowHandleMaximize();
    browser.url(url);
  });

  // FIXME refactor to DSL
  this.When(/^I visit QA Fundamentals course page$/, function () {
    const home_page_nav_trainings_link = '//li/a/span[text()="Обучения"]';
    browser.waitForVisible(home_page_nav_trainings_link, 5000);
    browser.click(home_page_nav_trainings_link);

    const home_page_nav_qa_fundamentals_link = '//li/a[text()="QA Fundamentals - януари 2017"]';
    browser.waitForVisible(home_page_nav_qa_fundamentals_link, 5000);
    browser.click(home_page_nav_qa_fundamentals_link);
  });

  this.When(/^I visit "([^"]*)"$/, function (url) {
    browser.url(url);
  });

  this.Then(/^I see the title of "([^"]*)"$/, function (title) {
    expect(browser.getTitle()).toEqual(title);
  });

  this.Then(/^I see that the title contains "([^"]*)"$/, function (title) {
    expect(browser.getTitle()).toContain(title);
  });

  this.Then(/^I see the course title contains "([^"]*)"$/, function (text) {
    const course_page_training_title = 'h2.content-title';
    browser.waitForVisible(course_page_training_title, 5000);
    expect(browser.getText(course_page_training_title)).toContain(text);
  });

};
module.exports = myStepDefinitionsWrapper;
