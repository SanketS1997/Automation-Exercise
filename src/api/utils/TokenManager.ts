export class TokenManager {
  private token?: string;

  setToken(token: string) {
    this.token = token;
  }

  clear() {
    this.token = undefined;
  }

  hasToken(): boolean {
    return !!this.token;
  }

  getToken(): string | undefined {
    return this.token;
  }

  getAuthHeader(): string | undefined {
    return this.token ? `Bearer ${this.token}` : undefined;
  }

  // Restful-Booker expects a Cookie header like: token=<token_value>
  getCookieHeader(): string | undefined {
    return this.token ? `token=${this.token}` : undefined;
  }
}
