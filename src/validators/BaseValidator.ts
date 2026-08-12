import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "../components/BaseComponent";

export class BaseValidator {
  private resolveLocator(input: Locator | BaseComponent): Locator {
    const maybe = input as any;
    // If a component wrapper is passed, it exposes a locator object (Locator instance).
    // Playwright's Locator also has a `locator` method, which is a function, so check type.
    if (maybe && typeof maybe.locator === "object") {
      return maybe.locator as Locator;
    }

    // Otherwise assume the input itself is a Locator
    return input as Locator;
  }

  protected async shouldBeVisible(locatorOrComponent: Locator | BaseComponent): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toBeVisible();
  }

  protected async shouldBeHidden(locatorOrComponent: Locator | BaseComponent): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toBeHidden();
  }

  protected async shouldHaveText(
    locatorOrComponent: Locator | BaseComponent,
    text: string,
  ): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toHaveText(text);
  }

  protected async shouldContainText(
    locatorOrComponent: Locator | BaseComponent,
    text: string,
  ): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toContainText(text);
  }

  protected async shouldBeEnabled(locatorOrComponent: Locator | BaseComponent): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toBeEnabled();
  }

  protected async shouldBeDisabled(locatorOrComponent: Locator | BaseComponent): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toBeDisabled();
  }

  protected async shouldHaveValue(
    locatorOrComponent: Locator | BaseComponent,
    value: string,
  ): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toHaveValue(value);
  }

  protected async shouldHaveCount(
    locatorOrComponent: Locator | BaseComponent,
    count: number,
  ): Promise<void> {
    const locator = this.resolveLocator(locatorOrComponent);
    await expect(locator).toHaveCount(count);
  }
}
