@selenium
Feature: Job #6925 exists in the Primerica jobs website
  To verify if a job number exists
  As a candidate
  I need to go to the website/career and find it

  Scenario: Verify that job #6925 exists in the Primerica system
    Given I am on the homepage
      And I click on the "Careers" link
    When I am on the careers page
      And I search for job "6925"
    Then I should see the correct result

