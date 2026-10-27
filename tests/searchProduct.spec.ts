import { test } from "../src/fixtures/pageFixture";
import productData from "../src/data/productData.json";

test(
  "Search Product",
  { tag: ["@regression", "@sanity"] },
  async ({ homePage, productsPage }) => {
    // Step 1-3

    await homePage.navigate();

    await homePage.verifyHomePageVisible();

    // Step 4

    await productsPage.clickProducts();

    // Step 5

    await productsPage.verifyAllProductsPage();

    // Step 6

    await productsPage.searchProduct(productData.searchProduct);

    // Step 7

    await productsPage.verifySearchedProductsHeading();

    // Step 8

    await productsPage.verifySearchResults();
  },
);
