import { test as base, expect } from "@playwright/test";

import { ContactUsPage } from "../pages/ContactUsPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { TestCasesPage } from "../pages/TestCasesPage";

type PageFixtures = {
  contactUsPage: ContactUsPage;
  homePage: HomePage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
  testCasesPage: TestCasesPage;
};

export const test = base.extend<PageFixtures>({
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  testCasesPage: async ({ page }, use) => {
    await use(new TestCasesPage(page));
  },
});

export { expect };
