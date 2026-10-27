import { TestInfo } from "@playwright/test";
import { Logger } from "../utils/Logger";

export function beforeEach(testInfo: TestInfo): void {
  Logger.info(
    `Starting test: ${testInfo.title} (project=${testInfo.project.name}, retry=${testInfo.retry})`,
  );
}
