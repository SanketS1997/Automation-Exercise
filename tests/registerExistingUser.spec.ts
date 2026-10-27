import { test } from "../src/fixtures/pageFixture";
import loginData from "../src/data/loginData.json";

test(
  "Register User with Existing Email",
  { tag: ["@regression", "@sanity"] },
  async ({ homePage, loginPage }) => {
    // Navigate to Home Page
    await homePage.navigate();

    // Verify Home Page
    await homePage.verifyHomePageVisible();

    // Click Signup/Login
    await homePage.clickSignupLogin();

    // Verify Signup Heading
    await loginPage.verifyNewUserSignupVisible();

    // Enter Existing User Details
    await loginPage.enterSignupDetails(loginData.existingUser);

    // Click Signup
    await loginPage.clickSignup();

    // Verify Error Message
    await loginPage.verifyExistingEmailError();
  },
);
