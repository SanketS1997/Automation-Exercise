import { test } from "../src/fixtures/pageFixture";

test(
  "Verify Test Cases Page",
  { tag: ["@regression", "@sanity"] },
  async ({ homePage, testCasesPage }) => {
    await homePage.navigate();

    await homePage.verifyHomePageVisible();

    await testCasesPage.clickTestCases();

    await testCasesPage.verifyTestCasesPage();
  },
);
