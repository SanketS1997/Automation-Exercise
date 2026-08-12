import { APIRequestContext, APIResponse, request } from "@playwright/test";

export class ApiClient {
  private context!: APIRequestContext;

  async init(baseURL: string): Promise<void> {
    this.context = await request.newContext({
      baseURL,
    });
  }

  async get(url: string): Promise<APIResponse> {
    return this.context.get(url);
  }

  async post(url: string, body: unknown): Promise<APIResponse> {
    return this.context.post(url, {
      data: body,
    });
  }

  async put(url: string, body: unknown): Promise<APIResponse> {
    return this.context.put(url, {
      data: body,
    });
  }

  async delete(url: string): Promise<APIResponse> {
    return this.context.delete(url);
  }

  async dispose(): Promise<void> {
    await this.context.dispose();
  }
}
