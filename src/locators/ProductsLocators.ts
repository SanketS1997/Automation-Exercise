import { Locator, Page } from "@playwright/test";

export class ProductsLocators {
  readonly productsLink: Locator;
  readonly allProductsTitle: Locator;
  readonly productsList: Locator;
  readonly firstViewProduct: Locator;

  readonly productName: Locator;
  readonly category: Locator;
  readonly price: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;

  readonly searchInput: Locator;
  readonly searchButton: Locator;

  readonly searchedProductsHeading: Locator;
  readonly searchedProducts: Locator;

  constructor(page: Page) {
    this.productsLink = page.locator('a[href="/products"]');

    this.allProductsTitle = page.locator(".title.text-center");

    this.productsList = page.locator(".features_items");

    this.firstViewProduct = page
      .locator('a[href^="/product_details/"]')
      .first();

    this.productName = page.locator(".product-information h2");

    this.category = page.locator(".product-information p").first();

    this.price = page.locator(".product-information span span");

    this.availability = page.getByText("Availability:");

    this.condition = page.getByText("Condition:");

    this.brand = page.getByText("Brand:");

    this.searchInput = page.locator("#search_product");

    this.searchButton = page.locator("#submit_search");

    this.searchedProductsHeading = page.getByRole("heading", {
      name: "Searched Products",
    });

    this.searchedProducts = page.locator(
      ".features_items .product-image-wrapper",
    );
  }
}
