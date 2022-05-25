import LoginPage from "./login.page";
import Page from "./page";

class HomePage extends Page {
  get successMsg() {
    return $("#successMessage");
  }
  get backBtn() {
    return $("#backButton");
  }
  async back() {
    await this.backBtn.click();
    await LoginPage.registerBtn.waitForDisplayed({ timeout: 3000 });
    expect(await LoginPage.title.getText()).toEqual("Login");
  }
}

export default new HomePage();
