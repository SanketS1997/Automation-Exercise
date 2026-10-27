# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactUs.spec.ts >> Contact Us Form
- Location: tests\contactUs.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Contact us' })
    - locator resolved to <a href="/contact_us">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Test source

```ts
  1  | import { Locator } from "@playwright/test";
  2  | 
  3  | export abstract class BaseComponent {
  4  |   constructor(public readonly locator: Locator) {}
  5  | 
  6  |   async click(): Promise<void> {
> 7  |     await this.locator.click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  8  |   }
  9  | 
  10 |   async fill(value: string): Promise<void> {
  11 |     await this.locator.fill(value);
  12 |   }
  13 | 
  14 |   async wait(): Promise<void> {
  15 |     await this.locator.waitFor({
  16 |       state: "visible",
  17 |     });
  18 |   }
  19 | }
  20 | 
```