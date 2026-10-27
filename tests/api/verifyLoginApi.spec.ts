import { test, expect } from "../../src/fixtures/apiFixture";
import { Endpoints } from "../../src/api/endpoints/Endpoints";
import loginData from "../../src/data/loginData.json";

test(
  "API 7: POST to Verify Login with valid details",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const response = await api.postForm(Endpoints.LOGIN, {
      email: loginData.validUser.email,
      password: loginData.validUser.password,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 200,
      message: "User exists!",
    });
  },
);

test(
  "API 8: POST to Verify Login without email returns a bad request",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const response = await api.postForm(Endpoints.LOGIN, {
      password: loginData.validUser.password,
    });

    // The endpoint returns HTTP 200 and reports the validation error in the payload.
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 400,
      message:
        "Bad request, email or password parameter is missing in POST request.",
    });
  },
);

test(
  "API 10: POST to Verify Login with invalid details returns user not found",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const response = await api.postForm(Endpoints.LOGIN, {
      email: loginData.invalidUser.email,
      password: loginData.invalidUser.password,
    });

    // The endpoint returns HTTP 200 and reports invalid credentials in the payload.
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      responseCode: 404,
      message: "User not found!",
    });
  },
);
