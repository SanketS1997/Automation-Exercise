import { HomeLocators } from "../locators/HomeLocators";
import { BaseValidator } from "./BaseValidator";

export class HomeValidator extends BaseValidator {
  constructor(private readonly locators: HomeLocators) {
    super();
  }

  async verifyHomePageVisible(): Promise<void> {
    await this.shouldBeVisible(this.locators.homeLogo);
  }
}
