export default globalSetup;
import fs from "fs";
import { ENV } from "./envLoader";

async function globalSetup(): Promise<void> {
  console.log("\n=====================================");
  console.log(" PLAYWRIGHT AUTOMATION FRAMEWORK ");
  console.log("=====================================\n");

  console.log(`Environment : ${ENV.ENVIRONMENT}`);
  console.log(`Base URL    : ${ENV.BASE_URL}`);
  console.log(`Headless    : ${ENV.HEADLESS}`);
  console.log("=====================================\n");

  // Create required folders if they don't exist
  const folders = [
    "logs",
    "test-results",
    "allure-results",
    "playwright-report",
  ];

  folders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  });

  console.log("Framework initialization completed.\n");
}
