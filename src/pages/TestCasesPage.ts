import { Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { TestCasesLocators } from "../locators/TestCasesLocators";
import { TestCasesValidator } from "../validators/TestCasesValidator";
import { Logger } from "../utils/Logger";
import { AllureHelper } from "../reporting/AllureHelper";

export class TestCasesPage extends BasePage {
  private readonly locators: TestCasesLocators;
  public readonly validator: TestCasesValidator;

  constructor(page: Page) {
    super(page);

    this.locators = new TestCasesLocators(page);
    this.validator = new TestCasesValidator(page);
  }

  async clickTestCases(): Promise<void> {
    await AllureHelper.step("Open Test Cases Page", async () => {
      Logger.info("Opening Test Cases page");

      await this.locators.testCasesLink.click();
    });
  }

  async verifyTestCasesPage(): Promise<void> {
    await this.validator.verifyTestCasesPage();
  }
}
