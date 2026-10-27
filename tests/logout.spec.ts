import { test } from "../src/fixtures/pageFixture";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
import loginData from "../src/data/loginData.json";

test("Logout User", { tag: ["@regression", "@smoke"] }, async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  // Step 1: Navigate to Home Page
  await homePage.navigate();

  // Step 2: Verify Home Page
  await homePage.verifyHomePageVisible();

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify Login Page
  await loginPage.verifyLoginHeadingVisible();

  // Step 5: Enter Valid Credentials
  await loginPage.enterLoginCredentials(loginData.validUser);

  // Step 6: Click Login
  await loginPage.clickLogin();

  // Step 7: Verify Logged In User
  await loginPage.verifyLoggedInUser();

  // Step 8: Click Logout
  await loginPage.clickLogout();

  // Step 9: Verify User is Navigated Back to Login Page
  await loginPage.verifyLoginHeadingVisible();
});
