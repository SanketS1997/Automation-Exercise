# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login User with Valid Credentials
- Location: tests\login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('a').filter({ hasText: 'Logged in as' })
Expected: visible
Received: undefined

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - banner [ref=f3e2]:
    - generic [ref=f3e5]:
      - link [ref=f3e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f3e9]
      - list [ref=f3e12]:
        - listitem [ref=f3e13]:
          - link " Home" [ref=f3e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f3e15]: 
            - text: Home
        - listitem [ref=f3e16]:
          - link " Products" [ref=f3e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f3e18]: 
            - text: Products
        - listitem [ref=f3e19]:
          - link " Cart" [ref=f3e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f3e21]: 
            - text: Cart
        - listitem [ref=f3e22]:
          - link " Signup / Login" [ref=f3e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f3e24]: 
            - text: Signup / Login
        - listitem [ref=f3e25]:
          - link " Test Cases" [ref=f3e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f3e27]: 
            - text: Test Cases
        - listitem [ref=f3e28]:
          - link " API Testing" [ref=f3e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f3e30]: 
            - text: API Testing
        - listitem [ref=f3e31]:
          - link " Video Tutorials" [ref=f3e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f3e33]: 
            - text: Video Tutorials
        - listitem [ref=f3e34]:
          - link " Contact us" [ref=f3e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f3e36]: 
            - text: Contact us
  - generic [ref=f3e39]:
    - generic [ref=f3e41]:
      - heading "Login to your account" [level=2] [ref=f3e42]
      - generic [ref=f3e43]:
        - textbox "Email Address" [ref=f3e44]: sanketshevale111@gmail.com
        - textbox "Password" [ref=f3e45]: Sanket@123
        - button "Login" [active] [ref=f3e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f3e48]
    - generic [ref=f3e50]:
      - heading "New User Signup!" [level=2] [ref=f3e51]
      - generic [ref=f3e52]:
        - textbox "Name" [ref=f3e53]
        - textbox "Email Address" [ref=f3e54]
        - button "Signup" [ref=f3e55] [cursor=pointer]
  - contentinfo [ref=f3e56]:
    - generic [ref=f3e61]:
      - heading "Subscription" [level=2] [ref=f3e62]
      - generic [ref=f3e63]:
        - textbox "Your email address" [ref=f3e64]
        - button "" [ref=f3e65] [cursor=pointer]
        - paragraph [ref=f3e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f3e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f3e73]:
    - iframe [ref=f3e75]:
      
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