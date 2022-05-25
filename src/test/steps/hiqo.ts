import { Given, Then, When } from "@wdio/cucumber-framework";
import LoginPage from "../../pages/hiqo/login.page";
import RegistrationPage from "../../pages/hiqo/registration.page";

Given(/^I am on the login page \"([^\"]*)\"$/, async function (url: string) {
  await LoginPage.open();
  await browser.maximizeWindow();
});

Then(/^I register with following incorrect credentials:$/, async function (table) {
  const rows = table.hashes();
  for (const row of rows) {
    await RegistrationPage.register({ username: row.username, password: row.password, message: row.message });
    await browser.pause(200);
  }
});

When(/^I click on register button$/, async function () {
  await LoginPage.registerBtn.click();
});

Then(/^I validate this header \"([^\"]*)\"$/, async function (header: string) {
  await $("#loginForm").waitForDisplayed();
  expect(await $("#loginForm").getText()).toEqual(header);
});

Then(/^I must be navigated to registration form with header as \"([^\"]*)\"$/, async function (registration: string) {
  await $("#registerForm").waitForDisplayed();
  expect(await $("#registerForm").getText()).toEqual(registration);
  await browser.pause(2000);
});
