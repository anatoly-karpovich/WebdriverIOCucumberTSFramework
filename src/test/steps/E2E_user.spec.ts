import { Given, Then, When } from "@wdio/cucumber-framework";
import { BASE_URI } from "../../config/APIconfig";
import UsersPage from "../../pages/users.page";

Given(/^I am on page (.+)$/, async (pageUrl: string) => {
  await UsersPage.openApp(pageUrl);
});

When(/^I perform (.+) user search$/, async (endpoint: string) => {
  await UsersPage.enterApiUrl(BASE_URI + endpoint);
  await UsersPage.clickOnAjaxButton();
});

When(/^I make GET (.+) api call$/, async (endpoint: string) => {
  console.log("To Implement");
});

Then(/^I validate the search result$/, async () => {
  const ui_status = await UsersPage.getStatusText();
  console.log("STATUS FROM UI:", ui_status);

  const ui_response = await UsersPage.getOutputText();
  console.log("Response FROM UI:", ui_response);
});
