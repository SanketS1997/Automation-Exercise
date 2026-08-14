# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactUs.spec.ts >> Contact Us Form
- Location: tests\contactUs.spec.ts:4:5

# Error details

```
Error: locator.setInputFiles: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name="upload_file"]')
    - locator resolved to <input type="file" name="upload_file" class="form-control"/>

```

# Test source

```ts
  1   | import { Page } from "@playwright/test";
  2   | 
  3   | import { BasePage } from "./BasePage";
  4   | import { ContactUsLocators } from "../locators/ContactUsLocators";
  5   | import { ContactUsValidator } from "../validators/ContactUsValidator";
  6   | import { ContactUs } from "../models/ContactUs";
  7   | import { Logger } from "../utils/Logger";
  8   | import { AllureHelper } from "../reporting/AllureHelper";
  9   | 
  10  | export class ContactUsPage extends BasePage {
  11  |   private readonly locators: ContactUsLocators;
  12  |   public readonly validator: ContactUsValidator;
  13  | 
  14  |   constructor(page: Page) {
  15  |     super(page);
  16  | 
  17  |     this.locators = new ContactUsLocators(page);
  18  |     this.validator = new ContactUsValidator(this.locators);
  19  |   }
  20  | 
  21  |   // ==========================================
  22  |   // Navigation
  23  |   // ==========================================
  24  | 
  25  |   async clickContactUs(): Promise<void> {
  26  |     await AllureHelper.step("Click Contact Us", async () => {
  27  |       Logger.info("Opening Contact Us page");
  28  | 
  29  |       await this.locators.contactUsLink.click();
  30  |     });
  31  |   }
  32  | 
  33  |   // ==========================================
  34  |   // Validations
  35  |   // ==========================================
  36  | 
  37  |   async verifyGetInTouchVisible(): Promise<void> {
  38  |     await this.validator.verifyGetInTouchVisible();
  39  |   }
  40  | 
  41  |   async verifySuccessMessage(): Promise<void> {
  42  |     const alertMessage = await this.getLastDialogMessage();
  43  |     await this.validator.verifySuccessMessage(alertMessage);
  44  |   }
  45  | 
  46  |   // ==========================================
  47  |   // Contact Form
  48  |   // ==========================================
  49  | 
  50  |   async enterContactDetails(contact: ContactUs): Promise<void> {
  51  |     await AllureHelper.step("Enter Contact Details", async () => {
  52  |       Logger.info(`Entering contact details for ${contact.email}`);
  53  | 
  54  |       await this.locators.name.fill(contact.name);
  55  |       await this.locators.email.fill(contact.email);
  56  |       await this.locators.subject.fill(contact.subject);
  57  |       await this.locators.message.fill(contact.message);
  58  |     });
  59  |   }
  60  | 
  61  |   async uploadDocument(filePath: string): Promise<void> {
  62  |     await AllureHelper.step("Upload Document", async () => {
  63  |       Logger.info(`Uploading file: ${filePath}`);
  64  | 
> 65  |       await this.locators.uploadFile.setInputFiles(filePath);
      |       ^ Error: locator.setInputFiles: Target page, context or browser has been closed
  66  |     });
  67  |   }
  68  | 
  69  |   private lastDialogMessage?: string;
  70  | 
  71  |   async acceptAlert(): Promise<void> {
  72  |     this.page.once("dialog", async (dialog) => {
  73  |       Logger.info(`Alert: ${dialog.message()}`);
  74  |       this.lastDialogMessage = dialog.message();
  75  |       await dialog.accept();
  76  |     });
  77  |   }
  78  | 
  79  |   async getLastDialogMessage(): Promise<string | undefined> {
  80  |     return this.lastDialogMessage;
  81  |   }
  82  | 
  83  |   async clickSubmit(): Promise<void> {
  84  |     await AllureHelper.step("Submit Contact Form", async () => {
  85  |       Logger.info("Submitting Contact Us form");
  86  | 
  87  |       await this.locators.submitButton.click();
  88  |     });
  89  |   }
  90  | 
  91  |   async clickHome(): Promise<void> {
  92  |     await AllureHelper.step("Navigate to Home", async () => {
  93  |       Logger.info("Navigating back to Home page");
  94  | 
  95  |       try {
  96  |         // Wait briefly for the Home button to become visible and clickable.
  97  |         await this.locators.homeButton.locator.waitFor({
  98  |           state: "visible",
  99  |           timeout: 3000,
  100 |         });
  101 |         await this.locators.homeButton.click();
  102 |         return;
  103 |       } catch (e) {
  104 |         // If the Home button isn't present or clickable, navigate directly to home route
  105 |       }
  106 | 
  107 |       const { AppRoutes } = await import("../constants/AppRoutes");
  108 |       await this.goto(AppRoutes.HOME);
  109 |     });
  110 |   }
  111 | }
  112 | 
```