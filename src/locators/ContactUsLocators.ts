import { Page } from "@playwright/test";
import { ButtonComponent } from "../components/ButtonComponent";
import { LabelComponent } from "../components/LabelComponent";
import { TextBoxComponent } from "../components/TextBoxComponent";

export class ContactUsLocators {
  // Navigation
  readonly contactUsLink: ButtonComponent;

  // Labels
  readonly getInTouchHeading: LabelComponent;
  readonly successMessage: LabelComponent;

  // Inputs
  readonly name: TextBoxComponent;
  readonly email: TextBoxComponent;
  readonly subject: TextBoxComponent;
  readonly message: TextBoxComponent;

  // File Upload
  readonly uploadFile;

  // Buttons
  readonly submitButton: ButtonComponent;
  readonly homeButton: ButtonComponent;

  constructor(page: Page) {
    this.contactUsLink = new ButtonComponent(
      page.getByRole("link", {
        name: "Contact us",
      }),
    );

    this.getInTouchHeading = new LabelComponent(
      page.getByRole("heading", {
        name: "Get In Touch",
      }),
    );

    this.name = new TextBoxComponent(page.locator('[data-qa="name"]'));

    this.email = new TextBoxComponent(page.locator('[data-qa="email"]'));

    this.subject = new TextBoxComponent(page.locator('[data-qa="subject"]'));

    this.message = new TextBoxComponent(page.locator('[data-qa="message"]'));

    this.uploadFile = page.locator('input[name="upload_file"]');

    this.submitButton = new ButtonComponent(
      page.locator('[data-qa="submit-button"]'),
    );

    this.successMessage = new LabelComponent(
      page.locator("div.status.alert.alert-success"),
    );

    this.homeButton = new ButtonComponent(
      page.locator("#form-section a.btn.btn-success"),
    );
  }
}
