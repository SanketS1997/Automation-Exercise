import { Page, TestInfo } from "@playwright/test";
import { Logger } from "../utils/Logger";

export async function afterEach(page: Page, testInfo: TestInfo): Promise<void> {
  const status = testInfo.status ?? "unknown";

  Logger.info(`Finished test: ${testInfo.title} (status=${status})`);

  if (status !== "failed") {
    return;
  }

  try {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach("failure-screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    Logger.warn(`Could not attach failure screenshot: ${message}`);
  }
}
