import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./config/envLoader";

export default defineConfig({
  // Test Directory
  testDir: "./tests",

  // Global Setup & Teardown
  globalSetup: "./config/global.setup.ts",
  globalTeardown: "./config/global.teardown.ts",

  // Execution
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,

  // Timeouts
  timeout: ENV.DEFAULT_TIMEOUT,

  expect: {
    timeout: ENV.EXPECT_TIMEOUT,
  },

  // Reports
  reporter: [["html"], ["allure-playwright"]],

  // Shared Settings
  use: {
    baseURL: ENV.BASE_URL,

    headless: ENV.HEADLESS,

    viewport: ENV.VIEWPORT,

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    actionTimeout: ENV.DEFAULT_TIMEOUT,

    navigationTimeout: ENV.DEFAULT_TIMEOUT,

    ignoreHTTPSErrors: true,
  },

  // Browsers
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    // Disabled Firefox and WebKit due to memory constraints and timeout issues
    // Uncomment to enable testing on these browsers
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },

    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //   },
    // },
  ],
});
