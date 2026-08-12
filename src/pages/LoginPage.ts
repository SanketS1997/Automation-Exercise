import { Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { LoginLocators } from "../locators/LoginLocators";
import { LoginValidator } from "../validators/LoginValidator";
import { LoginUser } from "../models/LoginUser";
import { RegistrationUser } from "../models/RegistrationUser";
import { Logger } from "../utils/Logger";
import { AllureHelper } from "../reporting/AllureHelper";

export class LoginPage extends BasePage {
  private readonly locators: LoginLocators;
  public readonly validator: LoginValidator;

  constructor(page: Page) {
    super(page);

    this.locators = new LoginLocators(page);
    this.validator = new LoginValidator(this.locators);
  }

  // ==========================================
  // Signup
  // ==========================================

  async verifyNewUserSignupVisible(): Promise<void> {
    await this.validator.verifyNewUserSignupVisible();
  }

  async enterSignupDetails(user: RegistrationUser): Promise<void> {
    await AllureHelper.step("Enter Signup Details", async () => {
      Logger.info(`Entering signup details for ${user.email}`);

      await this.locators.signupName.fill(user.name);
      await this.locators.signupEmail.fill(user.email);
    });
  }

  async clickSignup(): Promise<void> {
    await AllureHelper.step("Click Signup Button", async () => {
      Logger.info("Clicking Signup button");

      await this.locators.signupButton.click();
    });
  }

  // ==========================================
  // Login
  // ==========================================

  async verifyLoginHeadingVisible(): Promise<void> {
    await this.validator.verifyLoginHeadingVisible();
  }

  async enterLoginCredentials(user: LoginUser): Promise<void> {
    await AllureHelper.step("Enter Login Credentials", async () => {
      Logger.info(`Logging in with ${user.email}`);

      await this.locators.loginEmail.fill(user.email);
      await this.locators.loginPassword.fill(user.password);
    });
  }

  async clickLogin(): Promise<void> {
    await AllureHelper.step("Click Login Button", async () => {
      Logger.info("Clicking Login button");

      await this.locators.loginButton.click();
    });
  }

  // ==========================================
  // Logout
  // ==========================================

  async clickLogout(): Promise<void> {
    await AllureHelper.step("Click Logout", async () => {
      Logger.info("Logging out");

      await this.locators.logoutLink.click();
    });
  }

  // ==========================================
  // Validations
  // ==========================================

  async verifyInvalidLoginMessage(): Promise<void> {
    await this.validator.verifyInvalidLoginMessage();
  }

  async verifyLoggedInUser(): Promise<void> {
    await this.validator.verifyLoggedInUser();
  }

  async verifyExistingEmailError(): Promise<void> {
    await this.validator.verifyExistingEmailError();
  }
}
