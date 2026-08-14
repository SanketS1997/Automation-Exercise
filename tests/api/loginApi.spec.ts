import { test, expect } from "@playwright/test";
import { ApiFactory } from "../../src/api/factories/ApiFactory";
import { Endpoints } from "../../src/api/endpoints/Endpoints";
import { TokenManager } from "../../src/api/utils/TokenManager";

// Run this test only on the chromium project
test.beforeEach(async ({}, testInfo) => {
  // Use the boolean-first overload of test.skip to avoid TS overload errors
  test.skip(testInfo.project.name !== "chromium", "Run only in chromium");
});

test("Verify Login API and use token if provided", async () => {
  const BASE = process.env.API_BASE_URL || "https://automationexercise.com";
  const api = await ApiFactory.create(BASE);

  const response = await api.post(Endpoints.LOGIN, {
    email: process.env.AE_EMAIL || "sanketshevale111@gmail.com",
    password: process.env.AE_PASSWORD || "Sanket@123",
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  console.log("Login response:", text);

  // Try to parse token from response (common keys)
  let parsed: any = undefined;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    // not JSON
  }

  const token = parsed?.token || parsed?.access_token || parsed?.jwt;

  if (token) {
    console.log(
      "Token found in login response. Using TokenManager to make authenticated request.",
    );
    const tm = new TokenManager();
    tm.setToken(token);

    const authApi = await ApiFactory.create(BASE, tm);
    // Example authenticated request: try to fetch products (change as needed)
    try {
      const products = await authApi.get(Endpoints.PRODUCTS);
      console.log("Authenticated request status:", products.status());
      // optional assertion: expect(products.status()).toBe(200);
    } finally {
      await authApi.dispose();
    }
  } else {
    console.log(
      "No token present in login response; the endpoint may not support token-based auth.",
    );
  }

  await api.dispose();
});
