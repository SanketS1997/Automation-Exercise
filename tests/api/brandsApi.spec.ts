import { test, expect } from "../../src/fixtures/apiFixture";
import { Endpoints } from "../../src/api/endpoints/Endpoints";

test("API 4: PUT to All Brands List should not be supported",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const response = await api.put(Endpoints.BRANDS, {});
    // The endpoint returns HTTP 200 and reports the unsupported method in its payload.
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 405,
      message: "This request method is not supported.",
    });
  },
);
