import fs from "fs";
import path from "path";
import { ENV } from "../../config/envLoader";

export class TestData {
  public static load<T>(fileName: string): T {
    const format = ENV.TEST_DATA_FORMAT;

    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "datasets",
      format,
      `${fileName}.${format === "excel" ? "xlsx" : format}`,
    );

    if (!fs.existsSync(filePath)) {
      throw new Error(`Test data file not found: ${filePath}`);
    }

    switch (format) {
      case "json":
        return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;

      default:
        throw new Error(`Test data format '${format}' is not implemented yet.`);
    }
  }
}
