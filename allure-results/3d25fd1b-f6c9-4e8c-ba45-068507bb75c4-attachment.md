# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.ts >> Logout User
- Location: tests\logout.spec.ts:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('heading', { name: 'Login to your account' })
Expected: visible
Received: undefined

```

# Test source

```ts
  1  | import { expect, Locator } from "@playwright/test";
  2  | import { BaseComponent } from "../components/BaseComponent";
  3  | 
  4  | export class BaseValidator {
  5  |   private resolveLocator(input: Locator | BaseComponent): Locator {
  6  |     const maybe = input as any;
  7  |     // If a component wrapper is passed, it exposes a locator object (Locator instance).
  8  |     // Playwright's Locator also has a `locator` method, which is a function, so check type.
  9  |     if (maybe && typeof maybe.locator === "object") {
  10 |       return maybe.locator as Locator;
  11 |     }
  12 | 
  13 |     // Otherwise assume the input itself is a Locator
  14 |     return input as Locator;
  15 |   }
  16 | 
  17 |   protected async shouldBeVisible(
  18 |     locatorOrComponent: Locator | BaseComponent,
  19 |   ): Promise<void> {
  20 |     const locator = this.resolveLocator(locatorOrComponent);
> 21 |     await expect(locator).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  22 |   }
  23 | 
  24 |   protected async shouldBeHidden(
  25 |     locatorOrComponent: Locator | BaseComponent,
  26 |   ): Promise<void> {
  27 |     const locator = this.resolveLocator(locatorOrComponent);
  28 |     await expect(locator).toBeHidden();
  29 |   }
  30 | 
  31 |   protected async shouldHaveText(
  32 |     locatorOrComponent: Locator | BaseComponent,
  33 |     text: string,
  34 |   ): Promise<void> {
  35 |     const locator = this.resolveLocator(locatorOrComponent);
  36 |     await expect(locator).toHaveText(text);
  37 |   }
  38 | 
  39 |   protected async shouldContainText(
  40 |     locatorOrComponent: Locator | BaseComponent,
  41 |     text: string,
  42 |   ): Promise<void> {
  43 |     const locator = this.resolveLocator(locatorOrComponent);
  44 |     await expect(locator).toContainText(text);
  45 |   }
  46 | 
  47 |   protected async shouldBeEnabled(
  48 |     locatorOrComponent: Locator | BaseComponent,
  49 |   ): Promise<void> {
  50 |     const locator = this.resolveLocator(locatorOrComponent);
  51 |     await expect(locator).toBeEnabled();
  52 |   }
  53 | 
  54 |   protected async shouldBeDisabled(
  55 |     locatorOrComponent: Locator | BaseComponent,
  56 |   ): Promise<void> {
  57 |     const locator = this.resolveLocator(locatorOrComponent);
  58 |     await expect(locator).toBeDisabled();
  59 |   }
  60 | 
  61 |   protected async shouldHaveValue(
  62 |     locatorOrComponent: Locator | BaseComponent,
  63 |     value: string,
  64 |   ): Promise<void> {
  65 |     const locator = this.resolveLocator(locatorOrComponent);
  66 |     await expect(locator).toHaveValue(value);
  67 |   }
  68 | 
  69 |   protected async shouldHaveCount(
  70 |     locatorOrComponent: Locator | BaseComponent,
  71 |     count: number,
  72 |   ): Promise<void> {
  73 |     const locator = this.resolveLocator(locatorOrComponent);
  74 |     await expect(locator).toHaveCount(count);
  75 |   }
  76 | }
  77 | 
```