import { allure } from "allure-playwright";

export class AllureHelper {
  /**
   * Creates a named step in the Allure report.
   */
  public static async step(
    stepName: string,
    action: () => Promise<void>,
  ): Promise<void> {
    await allure.step(stepName, async () => {
      await action();
    });
  }

  /**
   * Adds text to the Allure report.
   */
  public static async addDescription(description: string): Promise<void> {
    await allure.description(description);
  }

  /**
   * Adds a tag to the test.
   */
  public static async addTag(tag: string): Promise<void> {
    await allure.tag(tag);
  }
}
