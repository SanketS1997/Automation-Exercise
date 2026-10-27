import { ApiClient, ApiClientContextOptions } from "../client/ApiClient";
import { TokenManager } from "../utils/TokenManager";

export class ApiFactory {
  static async create(
    baseURL: string,
    tokenManager?: TokenManager,
    options: ApiClientContextOptions = {},
  ): Promise<ApiClient> {
    const client = new ApiClient();

    await client.init(baseURL, options);

    if (tokenManager) {
      client.setTokenManager(tokenManager);
    }

    return client;
  }
}
