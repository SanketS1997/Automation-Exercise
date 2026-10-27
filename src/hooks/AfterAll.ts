import { Logger } from "../utils/Logger";

export function afterAll(): void {
  Logger.info("UI test suite finished");
}
