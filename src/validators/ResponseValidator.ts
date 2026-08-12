import { APIResponse, expect } from "@playwright/test";

export class ResponseValidator {
  static async verifyStatus(
    response: APIResponse,
    status: number,
  ): Promise<void> {
    expect(response.status()).toBe(status);
  }

  static async verifyOk(response: APIResponse): Promise<void> {
    expect(response.ok()).toBeTruthy();
  }

  static async verifyJsonProperty(
    response: APIResponse,
    property: string,
  ): Promise<void> {
    const body = await response.json();

    expect(body).toHaveProperty(property);
  }
}
