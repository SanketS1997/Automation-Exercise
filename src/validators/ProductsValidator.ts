import { expect } from "@playwright/test";
import { ProductsLocators } from "../locators/ProductsLocators";
import { BaseValidator } from "./BaseValidator";

export class ProductsValidator extends BaseValidator {
  constructor(private readonly locators: ProductsLocators) {
    super();
  }

  async verifyProductsPage(): Promise<void> {
    await this.shouldContainText(
      this.locators.allProductsTitle,
      "All Products",
    );
  }

  async verifyProductsListVisible(): Promise<void> {
    await this.shouldBeVisible(this.locators.productsList);
  }

  async verifySearchedProductsHeading(): Promise<void> {
    await this.shouldContainText(
      this.locators.searchedProductsHeading,
      "Searched Products",
    );
  }

  async verifyProductDetails(): Promise<void> {
    await this.shouldBeVisible(this.locators.productName);
    await this.shouldBeVisible(this.locators.category);
    await this.shouldBeVisible(this.locators.price);
    await this.shouldBeVisible(this.locators.availability);
    await this.shouldBeVisible(this.locators.condition);
    await this.shouldBeVisible(this.locators.brand);
  }

  async verifySearchResults(): Promise<void> {
    await this.shouldBeVisible(this.locators.searchedProducts.first());

    const count = await this.locators.searchedProducts.count();

    expect(count).toBeGreaterThan(0);
  }
}
