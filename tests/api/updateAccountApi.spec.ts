import { randomUUID } from "node:crypto";
import { test, expect } from "../../src/fixtures/apiFixture";
import { Endpoints } from "../../src/api/endpoints/Endpoints";

const PASSWORD = "Automation!123";

test(
  "API 13: PUT to Update Account updates the user",
  { tag: ["@regression", "@api"] },
  async ({ api }) => {
    const email = `qa-api-${randomUUID()}@example.com`;
    let accountCreated = false;

    const initialAccount = {
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
    };

    try {
      const createResponse = await api.postForm(
        Endpoints.CREATE_ACCOUNT,
        initialAccount,
      );
      const createBody = await createResponse.json();
      accountCreated = createBody.responseCode === 201;

      expect(createResponse.status()).toBe(200);
      expect(createBody).toMatchObject({
        responseCode: 201,
        message: "User created!",
      });

      const updateResponse = await api.putForm(Endpoints.UPDATE_ACCOUNT, {
        ...initialAccount,
        name: "Updated Automation QA",
        firstname: "Updated",
      });

      expect(updateResponse.status()).toBe(200);

      const updateBody = await updateResponse.json();
      expect(updateBody).toMatchObject({
        responseCode: 200,
        message: "User updated!",
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
