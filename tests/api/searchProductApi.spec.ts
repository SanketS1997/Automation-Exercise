import { test, expect } from "../../src/fixtures/apiFixture";
import { Endpoints } from "../../src/api/endpoints/Endpoints";

const SEARCH_TERM = "top";

test(
  "API 5: POST to Search Product returns matching products",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const response = await api.postForm(Endpoints.SEARCH_PRODUCT, {
      search_product: SEARCH_TERM,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.products).toEqual(expect.any(Array));
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(String),
      brand: expect.any(String),
      category: expect.any(Object),
    });
    expect(
      body.products.some((product: { name: string }) =>
        product.name.toLowerCase().includes(SEARCH_TERM),
      ),
    ).toBe(true);
  },
);

test(
  "API 6: POST to Search Product without search_product returns a bad request",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const response = await api.postForm(Endpoints.SEARCH_PRODUCT, {});

    // The endpoint returns HTTP 200 and reports the validation error in the payload.
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 400,
      message:
        "Bad request, search_product parameter is missing in POST request.",
    });
  },
);
