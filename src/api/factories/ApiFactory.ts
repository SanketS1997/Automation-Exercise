import { ApiClient } from "../client/ApiClient";

export class ApiFactory {
  static async create(baseURL: string): Promise<ApiClient> {
    const client = new ApiClient();

    await client.init(baseURL);

    return client;
  }
}
