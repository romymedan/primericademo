$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('primerica.feature');
formatter.feature({
  "line": 2,
  "name": "Job #6925 exists in the Primerica jobs website",
  "description": "To verify if a job number exists\nAs a candidate\nI need to go to the website/career and find it",
  "id": "job-#6925-exists-in-the-primerica-jobs-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@selenium"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Verify that job #6925 exists in the Primerica system",
  "description": "",
  "id": "job-#6925-exists-in-the-primerica-jobs-website;verify-that-job-#6925-exists-in-the-primerica-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the \"Careers\" link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am on the careers page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I search for job \"6925\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the correct result",
  "keyword": "Then "
});
formatter.match({
  "location": "PrimericaTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 4746825400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Careers",
      "offset": 16
    }
  ],
  "location": "PrimericaTest.iClickOnTheLink(String)"
});
formatter.result({
  "duration": 1278625093,
  "status": "passed"
});
formatter.match({
  "location": "PrimericaTest.iAmOnTheCareersPage()"
});
formatter.result({
  "duration": 999041059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6925",
      "offset": 18
    }
  ],
  "location": "PrimericaTest.iSearchForJob(String)"
});
formatter.result({
  "duration": 384919446,
  "status": "passed"
});
formatter.match({
  "location": "PrimericaTest.iShouldSeeTheCorrectResult()"
});
formatter.result({
  "duration": 24947925,
  "status": "passed"
});
});