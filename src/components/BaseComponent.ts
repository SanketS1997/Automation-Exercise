import { Locator } from "@playwright/test";

export abstract class BaseComponent {
  constructor(public readonly locator: Locator) {}

  async click(): Promise<void> {
    await this.locator.click();
  }

  async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  async wait(): Promise<void> {
    await this.locator.waitFor({
      state: "visible",
    });
  }
}
