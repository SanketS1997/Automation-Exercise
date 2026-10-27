import { Logger } from "../utils/Logger";

export function beforeAll(browserName: string): void {
  Logger.info(`Starting UI test suite on ${browserName}`);
}
