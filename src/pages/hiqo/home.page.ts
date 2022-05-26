import LoginPage from "./login.page";
import Page from "./page";

class HomePage extends Page {
  private get successMsg() {
    return $("#successMessage");
  }
  private get backBtn() {
    return $("#backButton");
  }

  public getSuccessMsg() {
    return this.successMsg;
  }

  public async back(): Promise<void> {
    await this.backBtn.click();
    await LoginPage.getTitle().waitForDisplayed({ timeout: 3000 });
    expect(await LoginPage.getTitle().getText()).toEqual("Login");
  }
}

export default new HomePage();
