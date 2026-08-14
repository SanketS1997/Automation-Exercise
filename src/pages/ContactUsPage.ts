import { Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { ContactUsLocators } from "../locators/ContactUsLocators";
import { ContactUsValidator } from "../validators/ContactUsValidator";
import { ContactUs } from "../models/ContactUs";
import { Logger } from "../utils/Logger";
import { AllureHelper } from "../reporting/AllureHelper";

export class ContactUsPage extends BasePage {
  private readonly locators: ContactUsLocators;
  public readonly validator: ContactUsValidator;

  constructor(page: Page) {
    super(page);

    this.locators = new ContactUsLocators(page);
    this.validator = new ContactUsValidator(this.locators);
  }

  // ==========================================
  // Navigation
  // ==========================================

  async clickContactUs(): Promise<void> {
    await AllureHelper.step("Click Contact Us", async () => {
      Logger.info("Opening Contact Us page");

      await this.locators.contactUsLink.click();
    });
  }

  // ==========================================
  // Validations
  // ==========================================

  async verifyGetInTouchVisible(): Promise<void> {
    await this.validator.verifyGetInTouchVisible();
  }

  async verifySuccessMessage(): Promise<void> {
    const alertMessage = await this.getLastDialogMessage();
    await this.validator.verifySuccessMessage(alertMessage);
  }

  // ==========================================
  // Contact Form
  // ==========================================

  async enterContactDetails(contact: ContactUs): Promise<void> {
    await AllureHelper.step("Enter Contact Details", async () => {
      Logger.info(`Entering contact details for ${contact.email}`);

      await this.locators.name.fill(contact.name);
      await this.locators.email.fill(contact.email);
      await this.locators.subject.fill(contact.subject);
      await this.locators.message.fill(contact.message);
    });
  }

  async uploadDocument(filePath: string): Promise<void> {
    await AllureHelper.step("Upload Document", async () => {
      Logger.info(`Uploading file: ${filePath}`);

      await this.locators.uploadFile.setInputFiles(filePath);
    });
  }

  private lastDialogMessage?: string;

  async acceptAlert(): Promise<void> {
    this.page.once("dialog", async (dialog) => {
      Logger.info(`Alert: ${dialog.message()}`);
      this.lastDialogMessage = dialog.message();
      await dialog.accept();
    });
  }

  async getLastDialogMessage(): Promise<string | undefined> {
    return this.lastDialogMessage;
  }

  async clickSubmit(): Promise<void> {
    await AllureHelper.step("Submit Contact Form", async () => {
      Logger.info("Submitting Contact Us form");

      await this.locators.submitButton.click();
    });
  }

  async clickHome(): Promise<void> {
    await AllureHelper.step("Navigate to Home", async () => {
      Logger.info("Navigating back to Home page");

      try {
        // Wait briefly for the Home button to become visible and clickable.
        await this.locators.homeButton.locator.waitFor({
          state: "visible",
          timeout: 3000,
        });
        await this.locators.homeButton.click();
        return;
      } catch (e) {
        // If the Home button isn't present or clickable, navigate directly to home route
      }

      const { AppRoutes } = await import("../constants/AppRoutes");
      await this.goto(AppRoutes.HOME);
    });
  }
}
