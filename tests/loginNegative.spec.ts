import { test } from "../src/fixtures/pageFixture";
import loginData from "../src/data/loginData.json";

test("Login User with Invalid Credentials", async ({ homePage, loginPage }) => {
  // Step 1: Navigate to Home Page
  await homePage.navigate();

  // Step 2: Verify Home Page
  await homePage.verifyHomePageVisible();

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify Login Page
  await loginPage.verifyLoginHeadingVisible();

  // Step 5: Enter Invalid Credentials
  await loginPage.enterLoginCredentials(loginData.invalidUser);

  // Step 6: Click Login
  await loginPage.clickLogin();

  // Step 7: Verify Error Message
  await loginPage.verifyInvalidLoginMessage();
});
