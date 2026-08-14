import { APIRequestContext, APIResponse, request } from "@playwright/test";
import { TokenManager } from "../utils/TokenManager";

export class ApiClient {
  private context!: APIRequestContext;
  private tokenManager?: TokenManager;

  async init(baseURL: string): Promise<void> {
    this.context = await request.newContext({
      baseURL,
    });
  }

  setTokenManager(manager: TokenManager) {
    this.tokenManager = manager;
  }

  private buildHeaders(headers?: Record<string, string>) {
    const result: Record<string, string> = headers ? { ...headers } : {};

    if (this.tokenManager && this.tokenManager.hasToken()) {
      const auth = this.tokenManager.getAuthHeader();
      const cookie = this.tokenManager.getCookieHeader();
      if (auth) result["Authorization"] = auth;
      if (cookie) result["Cookie"] = cookie;
    }

    return result;
  }

  async get(
    url: string,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.context.get(url, { headers: this.buildHeaders(headers) });
  }

  async post(
    url: string,
    body: unknown,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.context.post(url, {
      data: body,
      headers: this.buildHeaders(headers),
    });
  }

  async put(
    url: string,
    body: unknown,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.context.put(url, {
      data: body,
      headers: this.buildHeaders(headers),
    });
  }

  async delete(
    url: string,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.context.delete(url, { headers: this.buildHeaders(headers) });
  }

  async dispose(): Promise<void> {
    await this.context.dispose();
  }
}
