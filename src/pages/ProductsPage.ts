import { expect, Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { ProductsLocators } from "../locators/ProductsLocators";
import { ProductsValidator } from "../validators/ProductsValidator";
import { Product } from "../models/Product";
import { Logger } from "../utils/Logger";
import { AllureHelper } from "../reporting/AllureHelper";

export class ProductsPage extends BasePage {
  private readonly locators: ProductsLocators;
  public readonly validator: ProductsValidator;

  constructor(page: Page) {
    super(page);

    this.locators = new ProductsLocators(page);
    this.validator = new ProductsValidator(this.locators);
  }

  // ==========================================
  // Navigation
  // ==========================================

  async clickProducts(): Promise<void> {
    Logger.info("Opening Products Page");

    await AllureHelper.step("Open Products Page", async () => {
      await this.click(this.locators.productsLink);

      if (this.page.url().includes("#google_vignette")) {
        await this.page.goto("https://automationexercise.com/products");
      }
    });
  }

  // ==========================================
  // Validations
  // ==========================================

  async verifyAllProductsPage(): Promise<void> {
    await expect(this.page).toHaveURL(/products/);
    await this.validator.verifyProductsPage();
  }

  async verifyProductsListVisible(): Promise<void> {
    await this.validator.verifyProductsListVisible();
  }

  async verifyProductDetailPage(): Promise<void> {
    await expect(this.page).toHaveURL(/product_details/);
  }

  async verifyProductDetails(): Promise<void> {
    await this.validator.verifyProductDetails();
  }

  async verifySearchedProductsHeading(): Promise<void> {
    await this.validator.verifySearchedProductsHeading();
  }

  async verifySearchResults(): Promise<void> {
    await this.validator.verifySearchResults();
  }

  // ==========================================
  // Actions
  // ==========================================

  async clickFirstViewProduct(): Promise<void> {
    Logger.info("Opening First Product");

    await AllureHelper.step("Open First Product", async () => {
      await this.click(this.locators.firstViewProduct);
    });
  }

  async searchProduct(product: Product): Promise<void> {
    Logger.info(`Searching Product : ${product.productName}`);

    await AllureHelper.step(
      `Search Product : ${product.productName}`,
      async () => {
        await this.fill(this.locators.searchInput, product.productName);

        await this.click(this.locators.searchButton);
      },
    );
  }
}
