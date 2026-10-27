import { randomUUID } from "node:crypto";
import { test, expect } from "../../src/fixtures/apiFixture";
import { Endpoints } from "../../src/api/endpoints/Endpoints";

const PASSWORD = "Automation!123";
const ACCOUNT_NAME = "Automation QA";

test(
  "API 14: GET user account details by email",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const email = `qa-api-${randomUUID()}@example.com`;
    let accountCreated = false;

    try {
      const createResponse = await api.postForm(Endpoints.CREATE_ACCOUNT, {
        name: ACCOUNT_NAME,
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
      const createBody = await createResponse.json();
      accountCreated = createBody.responseCode === 201;

      expect(createResponse.status()).toBe(200);
      expect(createBody).toMatchObject({
        responseCode: 201,
        message: "User created!",
      });

      const query = new URLSearchParams({ email }).toString();
      const detailResponse = await api.get(
        `${Endpoints.USER_DETAIL_BY_EMAIL}?${query}`,
      );

      expect(detailResponse.status()).toBe(200);

      const detailBody = await detailResponse.json();
      expect(detailBody.responseCode).toBe(200);
      expect(detailBody.user).toMatchObject({
        email,
        name: ACCOUNT_NAME,
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
