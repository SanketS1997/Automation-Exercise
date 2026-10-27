import { test as base, expect } from "@playwright/test";

import { ContactUsPage } from "../pages/ContactUsPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { TestCasesPage } from "../pages/TestCasesPage";
import { afterAll } from "../hooks/AfterAll";
import { afterEach } from "../hooks/AfterEach";
import { beforeAll } from "../hooks/BeforeAll";
import { beforeEach } from "../hooks/BeforeEach";

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

test.beforeAll(({ browserName }) => beforeAll(browserName));
test.beforeEach(async ({ page }, testInfo) => {
  await page.route(
    /(googlesyndication\.com|doubleclick\.net|googletagservices\.com|googletagmanager\.com|google\.com\/pagead)/i,
    (route) => route.abort(),
  );

  await page.addLocatorHandler(
    page.getByText("Close", { exact: true }),
    async (closeButton) => closeButton.click(),
  );

  beforeEach(testInfo);
});
test.afterEach(async ({ page }, testInfo) => afterEach(page, testInfo));
test.afterAll(() => afterAll());

export { expect };
