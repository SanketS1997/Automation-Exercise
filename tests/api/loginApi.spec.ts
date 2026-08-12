import { test, expect } from "@playwright/test";
import { ApiFactory } from "../../src/api/factories/ApiFactory";
import { Endpoints } from "../../src/api/endpoints/Endpoints";

test("Verify Login API", async () => {
  const api = await ApiFactory.create("https://automationexercise.com");

  const response = await api.post(Endpoints.LOGIN, {
    email: "sanketshevale111@gmail.com",
    password: "Sanket@123",
  });

  expect(response.status()).toBe(200);

  console.log(await response.text());

  await api.dispose();
});
