import HomePage from "./home.page";
import Page from "./page";
import RegistrationPage from "./registration.page";

type Data = {
  username: string;
  password: string;
  message: string;
};
class LoginPage extends Page {
  // components
  private get username() {
    return $("#userName");
  }
  private get password() {
    return $("#password");
  }
  private get submitButton() {
    return $("#submit");
  }
  private get errorMsg() {
    return $("#errorMessage");
  }
  private get registerBtn() {
    return $("#registerOnLogin");
  }
  private get title() {
    return $("#loginForm");
  }

  public getTitle() {
    return this.title;
  }
  public getRegisterBtn() {
    return this.registerBtn;
  }
  public async open(): Promise<void> {
    super.open("https://anatoly-karpovich.github.io/HiqoMeetup/");
    expect(browser).toHaveTitle("Example for testing");
  }

  public async login(data: Data): Promise<void> {
    await this.username.setValue(data.username);
    await this.password.setValue(data.password);
    await this.submitButton.click();
    await HomePage.getSuccessMsg().waitForDisplayed({ timeout: 3000 });
    expect(await HomePage.getSuccessMsg().getText()).toEqual(`Hello, ${data.username}!`);
  }

  public async loginTest(data: Data): Promise<void> {
    await this.username.setValue(data.username);
    await this.password.setValue(data.password);
    await this.submitButton.click();
    await this.errorMsg.waitForDisplayed({ timeout: 3000 });
    expect(await this.errorMsg.getText()).toEqual(data.message);
  }

  public async register(): Promise<void> {
    await this.registerBtn.click();
    await RegistrationPage.getTitle().waitForDisplayed({ timeout: 3000 });
    expect((await RegistrationPage.getTitle()).getText()).toEqual("Registration");
  }
}

export default new LoginPage();
