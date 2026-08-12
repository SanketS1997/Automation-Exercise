import { test } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";

test("Register User - Step 1 to Step 7", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  const email = `sanket${Date.now()}@gmail.com`;

  await homePage.navigate();

  await homePage.verifyHomePageVisible();

  await homePage.clickSignupLogin();

  await loginPage.verifyNewUserSignupVisible();

  await loginPage.enterSignupDetails({ name: "Sanket", email });

  await loginPage.clickSignup();

  // Verify that Account Information page is displayed by checking the heading
  await page.getByRole('heading', { name: 'Enter Account Information' }).waitFor({ state: 'visible', timeout: 15000 });

  // Pause for manual inspection if needed (remove or comment out in CI)
  // await page.pause();
});
