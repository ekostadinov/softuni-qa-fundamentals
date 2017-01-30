Feature: Softuni demo feature

  As a developer
  I want to have webdriver available to me in my steps
  So that I don't have to configure my world object and I focus on testing

@simple
Scenario: Visit Softuni homepage
  When  I visit "https://softuni.bg/"
  Then  I see that the title contains "Softuni.bg"

@trainings
Scenario: Visit QA Fundamentals course
  Given  I visit webpage "https://softuni.bg/"
  When  I visit QA Fundamentals course page
  Then  I see that the course title contains "QA Fundamentals"

@hope
Scenario: Visit QA Fundamentals course
  Given  I visit webpage "https://softuni.bg/"
  When  I visit QA Fundamentals course page
  Then  I want to see lecturer name
