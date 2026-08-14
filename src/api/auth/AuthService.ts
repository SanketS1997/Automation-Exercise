import { request } from "@playwright/test";
import { AuthResponse } from "../models/AuthResponse";

export class AuthService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async login(username: string, password: string): Promise<string> {
    const ctx = await request.newContext({ baseURL: this.baseURL });
    try {
      const res = await ctx.post("/auth", {
        data: { username, password },
        headers: { "Content-Type": "application/json" },
      });

      if (res.status() !== 200) {
        throw new Error(
          `Login failed with status ${res.status()}: ${await res.text()}`,
        );
      }

      const body = (await res.json()) as AuthResponse;

      if (!body || !body.token) {
        throw new Error("Authentication response did not contain a token");
      }

      return body.token;
    } finally {
      await ctx.dispose();
    }
  }
}
