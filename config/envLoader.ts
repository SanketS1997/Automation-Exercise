import dotenv from "dotenv";
import path from "path";

type TestDataFormat = "json" | "csv" | "xml" | "excel";

const environment = process.env.TEST_ENV ?? "qa";

dotenv.config({
  path: path.resolve(process.cwd(), `config/environments/${environment}.env`),
});

function required(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable '${key}' is missing.`);
  }

  return value;
}

export const ENV = Object.freeze({
  ENVIRONMENT: environment,

  BASE_URL: required("BASE_URL"),

  TEST_DATA_FORMAT: required("TEST_DATA_FORMAT") as TestDataFormat,

  HEADLESS:
    process.env.HEADLESS === undefined ||
    process.env.HEADLESS.toLowerCase() === "true",

  SLOW_MO: Number(process.env.SLOW_MO ?? 0),

  DEFAULT_TIMEOUT: Number(process.env.DEFAULT_TIMEOUT ?? 60000),

  EXPECT_TIMEOUT: Number(process.env.EXPECT_TIMEOUT ?? 15000),

  VIEWPORT: {
    width: Number(process.env.VIEWPORT_WIDTH ?? 1440),
    height: Number(process.env.VIEWPORT_HEIGHT ?? 900),
  },
});
