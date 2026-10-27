import { test, expect } from "@playwright/test";
import { ApiFactory } from "../../src/api/factories/ApiFactory";
import { Endpoints } from "../../src/api/endpoints/Endpoints";
import { TokenManager } from "../../src/api/utils/TokenManager";

// Run this test only on the chromium project
test.beforeEach(async ({}, testInfo) => {
  // Use the boolean-first overload of test.skip to avoid TS overload errors
  test.skip(testInfo.project.name !== "chromium", "Run only in chromium");
});

test(
  "Verify Login API and use token if provided",
  { tag: ["@regression", "@smoke"] },
  async () => {
    test.skip(
      !process.env.AE_EMAIL || !process.env.AE_PASSWORD,
      "Set AE_EMAIL and AE_PASSWORD to run this test.",
    );

    const BASE = process.env.API_BASE_URL || "https://automationexercise.com";
    const api = await ApiFactory.create(BASE);

    try {
      const response = await api.post(Endpoints.LOGIN, {
        email: process.env.AE_EMAIL!,
        password: process.env.AE_PASSWORD!,
      });

      expect(response.status()).toBe(200);

      const text = await response.text();

      // Try to parse token from login response (common keys)
      let parsed: any = undefined;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        // not JSON
      }

      const token = parsed?.token || parsed?.access_token || parsed?.jwt;

      if (token) {
        const tm = new TokenManager();
        tm.setToken(token);

        const authApi = await ApiFactory.create(BASE, tm);
        // Example authenticated request: try to fetch products (change as needed)
        try {
          await authApi.get(Endpoints.PRODUCTS);
        } finally {
          await authApi.dispose();
        }
      }
    } finally {
      await api.dispose();
    }
  },
);
