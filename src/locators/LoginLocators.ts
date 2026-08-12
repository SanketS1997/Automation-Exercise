import { Locator, Page } from "@playwright/test";

export class LoginLocators {
  // ---------------------------
  // Signup
  // ---------------------------
  readonly signupHeading: Locator;
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupButton: Locator;

  // ---------------------------
  // Login
  // ---------------------------
  readonly loginHeading: Locator;
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;

  // ---------------------------
  // Messages
  // ---------------------------
  readonly loginError: Locator;
  readonly existingEmailError: Locator;

  // ---------------------------
  // User
  // ---------------------------
  readonly loggedInUser: Locator;

  // ---------------------------
  // Logout
  // ---------------------------
  readonly logoutLink: Locator;

  constructor(page: Page) {
    // Signup
    this.signupHeading = page.getByRole("heading", {
      name: "New User Signup!",
    });

    this.signupName = page.locator('[data-qa="signup-name"]');

    this.signupEmail = page.locator('[data-qa="signup-email"]');

    this.signupButton = page.locator('[data-qa="signup-button"]');

    // Login
    this.loginHeading = page.getByRole("heading", {
      name: "Login to your account",
    });

    this.loginEmail = page.locator('[data-qa="login-email"]');

    this.loginPassword = page.locator('[data-qa="login-password"]');

    this.loginButton = page.locator('[data-qa="login-button"]');

    // Errors
    this.loginError = page.getByText("Your email or password is incorrect!");

    this.existingEmailError = page.getByText("Email Address already exist!");

    // Logged User
    this.loggedInUser = page.locator("a").filter({
      hasText: "Logged in as",
    });

    // Logout
    this.logoutLink = page.getByRole("link", {
      name: "Logout",
    });
  }
}
