import { Page, Locator } from "@playwright/test";

export class HomeLocators {
  readonly homeLogo: Locator;
  readonly signupLoginLink: Locator;

  constructor(page: Page) {
    this.homeLogo = page.locator('img[alt="Website for automation practice"]');

    this.signupLoginLink = page.getByRole("link", {
      name: "Signup / Login",
    });
  }
}
