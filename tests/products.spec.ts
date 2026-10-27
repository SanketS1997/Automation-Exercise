import { test } from "../src/fixtures/pageFixture";

test(
  "Verify All Products and Product Detail Page",
  { tag: ["@regression", "@smoke"] },
  async ({ homePage, productsPage }) => {
    // Step 1-3
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4
    await productsPage.clickProducts();

    // Step 5
    await productsPage.verifyAllProductsPage();

    // Step 6
    await productsPage.verifyProductsListVisible();

    // Step 7
    await productsPage.clickFirstViewProduct();

    // Step 8
    await productsPage.verifyProductDetailPage();

    // Step 9
    await productsPage.verifyProductDetails();
  },
);
