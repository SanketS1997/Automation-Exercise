import { APIRequestContext, APIResponse, request } from "@playwright/test";
import { TokenManager } from "../utils/TokenManager";

export type ApiClientContextOptions = Omit<
  NonNullable<Parameters<typeof request.newContext>[0]>,
  "baseURL"
>;

export type ApiRequestOptions = NonNullable<
  Parameters<APIRequestContext["fetch"]>[1]
>;

export class ApiClient {
  private context?: APIRequestContext;
  private tokenManager?: TokenManager;
  private disposed = false;

  async init(
    baseURL: string,
    options: ApiClientContextOptions = {},
  ): Promise<void> {
    if (this.context) {
      throw new Error("ApiClient has already been initialized.");
    }

    this.context = await request.newContext({ ...options, baseURL });
  }

  setTokenManager(manager: TokenManager): void {
    this.tokenManager = manager;
  }

  private buildHeaders(
    headers?: Record<string, string>,
  ): Record<string, string> {
    const result: Record<string, string> = headers ? { ...headers } : {};

    if (this.tokenManager && this.tokenManager.hasToken()) {
      const auth = this.tokenManager.getAuthHeader();
      const cookie = this.tokenManager.getCookieHeader();
      if (auth && !this.hasHeader(result, "authorization")) {
        result.Authorization = auth;
      }
      if (cookie && !this.hasHeader(result, "cookie")) {
        result.Cookie = cookie;
      }
    }

    return result;
  }

  private hasHeader(headers: Record<string, string>, name: string): boolean {
    return Object.keys(headers).some((header) => header.toLowerCase() === name);
  }

  private getContext(): APIRequestContext {
    if (!this.context || this.disposed) {
      throw new Error(
        "ApiClient is not initialized or has already been disposed.",
      );
    }

    return this.context;
  }

  /** Send any HTTP method with Playwright request options. */
  async send(
    method: string,
    url: string,
    options: ApiRequestOptions = {},
  ): Promise<APIResponse> {
    const context = this.getContext();
    return context.fetch(url, {
      ...options,
      method,
      headers: this.buildHeaders(options.headers),
    });
  }

  async get(
    url: string,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("GET", url, { headers });
  }

  async post(
    url: string,
    body: unknown,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("POST", url, {
      data: body,
      headers,
    });
  }

  async postForm(
    url: string,
    form: Record<string, string>,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("POST", url, {
      form,
      headers,
    });
  }

  async put(
    url: string,
    body: unknown,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("PUT", url, {
      data: body,
      headers,
    });
  }

  async putForm(
    url: string,
    form: Record<string, string>,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("PUT", url, {
      form,
      headers,
    });
  }

  async patch(
    url: string,
    body: unknown,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("PATCH", url, { data: body, headers });
  }

  async delete(
    url: string,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("DELETE", url, { headers });
  }

  async deleteForm(
    url: string,
    form: Record<string, string>,
    headers?: Record<string, string>,
  ): Promise<APIResponse> {
    return this.send("DELETE", url, {
      form,
      headers,
    });
  }

  async dispose(): Promise<void> {
    if (!this.context || this.disposed) {
      return;
    }

    this.disposed = true;
    await this.context.dispose();
  }
}
