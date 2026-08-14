import { ApiClient } from "../client/ApiClient";
import { TokenManager } from "../utils/TokenManager";

export class ApiFactory {
  static async create(
    baseURL: string,
    tokenManager?: TokenManager,
  ): Promise<ApiClient> {
    const client = new ApiClient();

    await client.init(baseURL);

    if (tokenManager) {
      client.setTokenManager(tokenManager);
    }

    return client;
  }
}
