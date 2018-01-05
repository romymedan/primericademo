import cucumber.annotation.After;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class PrimericaTest {
  WebDriver dr;

  @Given("^I am on the homepage$")
  public void iAmOnTheHomepage() {
    dr = new FirefoxDriver();
    dr.get("http://www.primerica.com/public/");
  }

  @Given("^I click on the \"([^\"]*)\" link$")
  public void iClickOnTheLink(String linkName) {
    WebElement actualLinkName = dr.findElement(By.partialLinkText(linkName));
    actualLinkName.click();

    // Switch to new window opened

    for (String winHandle : dr.getWindowHandles()) {
      dr.switchTo().window(winHandle);
    }


  }

  @When("^I am on the careers page$")
  public void iAmOnTheCareersPage() {
    String actualUrl = dr.getCurrentUrl();
    System.out.println(actualUrl);
    Assert.assertEquals("http://chk.tbe.taleo.net/chk05/ats/careers/jobSearch.jsp?cws=1&org=PRIMERICA", actualUrl);
  }

  @When("^I search for job \"([^\"]*)\"$")
  public void iSearchForJob(String jobNum) {
    WebElement posIdField = dr.findElement(By.id("CUSTOM_784"));
    posIdField.sendKeys(jobNum);
    WebElement searchButton = dr.findElement(By.cssSelector("input[name='tbe_cws_submit']"));
    searchButton.submit();
  }

  @Then("^I should see the correct result$")
  public void iShouldSeeTheCorrectResult() {
    Assert.assertTrue("The desire job does not exist ", dr.getPageSource().contains("6925"));
  }


  @After
  public void after() {
    if (dr != null) {
      dr.quit();
    }
  }
}
