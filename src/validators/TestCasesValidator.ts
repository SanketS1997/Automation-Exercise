import { expect, Page } from "@playwright/test";

export class TestCasesValidator {
  constructor(private readonly page: Page) {}

  async verifyTestCasesPage(): Promise<void> {
    await expect(this.page).toHaveURL(/test_cases/);
  }
}
