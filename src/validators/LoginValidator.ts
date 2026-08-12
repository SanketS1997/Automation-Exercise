import { LoginLocators } from "../locators/LoginLocators";
import { BaseValidator } from "./BaseValidator";

export class LoginValidator extends BaseValidator {
  constructor(private readonly locators: LoginLocators) {
    super();
  }

  async verifyLoginHeadingVisible(): Promise<void> {
    await this.shouldBeVisible(this.locators.loginHeading);
  }

  async verifyNewUserSignupVisible(): Promise<void> {
    await this.shouldBeVisible(this.locators.signupHeading);
  }

  async verifyInvalidLoginMessage(): Promise<void> {
    await this.shouldBeVisible(this.locators.loginError);
  }

  async verifyLoggedInUser(): Promise<void> {
    await this.shouldBeVisible(this.locators.loggedInUser);
  }

  async verifyExistingEmailError(): Promise<void> {
    await this.shouldBeVisible(this.locators.existingEmailError);
  }
}
