import LoginPage from "./login.page";
import Page from "./page";

type Data = {
  username: string;
  password: string;
  message: string;
};

class RegistrationPage extends Page {
  private get title() {
    return $("#registerForm");
  }
  private get username() {
    return $("#userNameOnRegister");
  }
  private get password() {
    return $("#passwordOnRegister");
  }
  private get registerBtn() {
    return $("#register");
  }
  private get errorMsg() {
    return $("#errorMessageOnRegister");
  }
  private get backBtn() {
    return $("#backOnRegister");
  }

  //access
  public getTitle() {
    return this.title;
  }

  //actions

  public async open(): Promise<void> {
    await LoginPage.register();
    await this.backBtn.waitForDisplayed({ timeout: 3000 });
    let regTitle = await this.title.getText();
    expect(regTitle).toEqual("Registration");
  }

  public async register(data: Data): Promise<void> {
    await this.username.setValue(data.username);
    await this.password.setValue(data.password);
    await this.registerBtn.click();
    await this.errorMsg.waitForDisplayed({ timeout: 3000 });
    let message = await this.errorMsg.getText();
    expect(message).toEqual(data.message);
  }

  public async back(): Promise<void> {
    await this.backBtn.click();
    await LoginPage.getTitle().waitForDisplayed({ timeout: 3000 });
    expect(await LoginPage.getTitle().getText()).toEqual("Login");
  }
}

export default new RegistrationPage();
