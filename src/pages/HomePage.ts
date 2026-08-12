import { Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { HomeLocators } from "../locators/HomeLocators";
import { HomeValidator } from "../validators/HomeValidator";
import { Logger } from "../utils/Logger";
import { AllureHelper } from "../reporting/AllureHelper";
import { AppRoutes } from "../constants/AppRoutes";

export class HomePage extends BasePage {
  private readonly locators: HomeLocators;

  public readonly validator: HomeValidator;

  constructor(page: Page) {
    super(page);

    this.locators = new HomeLocators(page);

    this.validator = new HomeValidator(this.locators);
  }

  async navigate(): Promise<void> {
    Logger.info("Opening Home Page");

    await AllureHelper.step("Navigate to Home Page", async () => {
      await this.goto(AppRoutes.HOME);
    });
  }

  async verifyHomePageVisible(): Promise<void> {
    await this.validator.verifyHomePageVisible();
  }

  async clickSignupLogin(): Promise<void> {
    Logger.info("Click Signup/Login");

    await AllureHelper.step("Click Signup/Login", async () => {
      await this.click(this.locators.signupLoginLink);
    });
  }
}
