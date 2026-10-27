import { test as base, expect } from "@playwright/test";
import { ApiClient } from "../api/client/ApiClient";
import { ApiFactory } from "../api/factories/ApiFactory";

type ApiFixtures = {
  api: ApiClient;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ baseURL }, use) => {
    const apiBaseURL = process.env.API_BASE_URL ?? baseURL;
    if (!apiBaseURL) {
      throw new Error(
        "API base URL is missing. Set API_BASE_URL or configure Playwright baseURL.",
      );
    }

    const api = await ApiFactory.create(apiBaseURL);
    try {
      await use(api);
    } finally {
      await api.dispose();
    }
  },
});

export { expect };
