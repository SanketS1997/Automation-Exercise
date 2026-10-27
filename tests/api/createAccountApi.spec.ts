import { randomUUID } from "node:crypto";
import { test, expect } from "../../src/fixtures/apiFixture";
import { Endpoints } from "../../src/api/endpoints/Endpoints";

const PASSWORD = "Automation!123";

test(
  "API 11: POST to Create Account creates a user",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const email = `qa-api-${randomUUID()}@example.com`;
    let accountCreated = false;

    try {
      const response = await api.postForm(Endpoints.CREATE_ACCOUNT, {
        name: "Automation QA",
        email,
        password: PASSWORD,
        title: "Mr",
        birth_date: "10",
        birth_month: "May",
        birth_year: "1990",
        firstname: "Automation",
        lastname: "QA",
        company: "AutomationExercise",
        address1: "1 Test Street",
        address2: "Suite 100",
        country: "United States",
        zipcode: "12345",
        state: "California",
        city: "Los Angeles",
        mobile_number: "1234567890",
      });
      const body = await response.json();
      accountCreated = body.responseCode === 201;

      expect(response.status()).toBe(200);
      expect(body).toMatchObject({
        responseCode: 201,
        message: "User created!",
      });
    } finally {
      if (accountCreated) {
        const deleteResponse = await api.deleteForm(Endpoints.DELETE_ACCOUNT, {
          email,
          password: PASSWORD,
        });
        expect(deleteResponse.status()).toBe(200);
        expect(await deleteResponse.json()).toMatchObject({
          responseCode: 200,
          message: "Account deleted!",
        });
      }
    }
  },
);
