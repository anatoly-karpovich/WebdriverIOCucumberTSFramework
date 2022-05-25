import LoginPage from "./login.page";
import Page from "./page";

type Data = {
  username: string;
  password: string;
  message: string;
};

class RegistrationPage extends Page {
  get title() {
    return $("#registerForm");
  }
  get username() {
    return $("#userNameOnRegister");
  }
  get password() {
    return $("#passwordOnRegister");
  }
  get registerBtn() {
    return $("#register");
  }
  get errorMsg() {
    return $("#errorMessageOnRegister");
  }
  get backBtn() {
    return $("#backOnRegister");
  }

  //actions

  async open() {
    await LoginPage.register();
    await this.backBtn.waitForDisplayed({ timeout: 3000 });
    let regTitle = await this.title.getText();
    await expect(regTitle).toEqual("Registration");
  }

  async register(data: Data) {
    await this.username.setValue(data.username);
    await this.password.setValue(data.password);
    await this.registerBtn.click();
    await this.errorMsg.waitForDisplayed({ timeout: 3000 });
    let message = await this.errorMsg.getText();
    expect(message).toEqual(data.message);
  }

  async back() {
    await this.backBtn.click();
    await LoginPage.title.waitForDisplayed({ timeout: 3000 });
    expect(await LoginPage.title.getText()).toEqual("Login");
  }
}

export default new RegistrationPage();
