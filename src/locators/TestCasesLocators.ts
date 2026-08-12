import { Page } from "@playwright/test";
import { ButtonComponent } from "../components/ButtonComponent";

export class TestCasesLocators {
  readonly testCasesLink: ButtonComponent;

  constructor(page: Page) {
    this.testCasesLink = new ButtonComponent(
      page.locator(".shop-menu").locator('a[href="/test_cases"]'),
    );
  }
}
