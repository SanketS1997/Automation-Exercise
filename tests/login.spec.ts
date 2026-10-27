import { test } from "../src/fixtures/pageFixture";
import loginData from "../src/data/loginData.json";

test(
  "Login User with Valid Credentials",
  { tag: ["@regression", "@smoke"] },
  async ({ homePage, loginPage }) => {
    await homePage.navigate();

    await homePage.verifyHomePageVisible();

    await homePage.clickSignupLogin();

    await loginPage.verifyLoginHeadingVisible();

    await loginPage.enterLoginCredentials(loginData.validUser);

    await loginPage.clickLogin();

    await loginPage.verifyLoggedInUser();
  },
);
