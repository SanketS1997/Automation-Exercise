import fs from "fs";
import path from "path";

export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  DEBUG = "DEBUG",
}

export class Logger {
  private static readonly logFolder = path.join(process.cwd(), "logs");

  private static readonly executionLog = path.join(
    Logger.logFolder,
    "execution.log",
  );

  private static readonly errorLog = path.join(Logger.logFolder, "error.log");

  private static initialize(): void {
    if (!fs.existsSync(Logger.logFolder)) {
      fs.mkdirSync(Logger.logFolder, {
        recursive: true,
      });
    }
  }

  private static write(level: LogLevel, message: string, file: string): void {
    Logger.initialize();

    const timestamp = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);

    const log = `${timestamp} [${level}] ${message}\n`;

    fs.appendFileSync(file, log);

    console.log(log.trim());
  }

  public static info(message: string): void {
    Logger.write(LogLevel.INFO, message, Logger.executionLog);
  }

  public static warn(message: string): void {
    Logger.write(LogLevel.WARN, message, Logger.executionLog);
  }

  public static debug(message: string): void {
    Logger.write(LogLevel.DEBUG, message, Logger.executionLog);
  }

  public static error(message: string): void {
    Logger.write(LogLevel.ERROR, message, Logger.errorLog);
  }
}
