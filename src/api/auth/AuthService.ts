import { ApiFactory } from "../factories/ApiFactory";
import { AuthResponse } from "../models/AuthResponse";

export class AuthService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async login(username: string, password: string): Promise<string> {
    const api = await ApiFactory.create(this.baseURL);
    try {
      const res = await api.post("/auth", { username, password });

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
      await api.dispose();
    }
  }
}
