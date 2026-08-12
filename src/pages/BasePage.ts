import { Locator, Page } from "@playwright/test";
import { AllureHelper } from "../reporting/AllureHelper";
import { Logger } from "../utils/Logger";

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a relative URL.
   */
  protected async navigate(url: string): Promise<void> {
    await AllureHelper.step(`Navigate to ${url}`, async () => {
      Logger.info(`Navigating to: ${url}`);
      await this.page.goto(url, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  /**
   * Wait until page is fully loaded.
   */
  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Click on an element.
   */
  protected async click(locator: Locator): Promise<void> {
    Logger.info(`Clicking element`);
    await locator.click();
  }

  /**
   * Enter text into an input.
   */
  protected async fill(locator: Locator, value: string): Promise<void> {
    Logger.info(`Entering value: ${value}`);
    await locator.fill(value);
  }

  /**
   * Get visible text.
   */
  protected async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) ?? "";
  }

  /**
   * Check if an element is visible.
   */
  protected async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  /**
   * Wait for an element to become visible.
   */
  protected async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: "visible",
    });
  }

  /**
   * Capture a screenshot.
   */
  protected async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/${name}.png`,
      fullPage: true,
    });
  }

  /**
   * Returns current page URL.
   */
  protected async goto(url: string): Promise<void> {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  }
}
