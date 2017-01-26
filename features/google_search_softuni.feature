Feature: Softuni demo feature

  As a developer # FIXME dear authors, QAs also do code ... just my $0,02
  I want to have webdriver available to me in my steps
  So that I don't have to configure my world object and I focus on testing

@watch @simple
Scenario: Visit Softuni homepage
  When  I visit "https://softuni.bg/" # FIXME dear authors, what happened with the Gherkin basics!?
  Then  I see that the title contains "Softuni.bg" # Where are the preconditions -> a.k.a Given steps!?

@not-watch @trainings
Scenario: Visit QA Fundamentals course
  Given  I visit webpage "https://softuni.bg/"
  When  I visit QA Fundamentals course page
  Then  I see the course title contains "QA Fundamentals"
