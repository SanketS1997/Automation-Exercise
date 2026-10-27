import { test, expect } from "@playwright/test";
import { ApiFactory } from "../../src/api/factories/ApiFactory";
import { AuthService } from "../../src/api/auth/AuthService";
import { TokenManager } from "../../src/api/utils/TokenManager";

const BASE = process.env.API_BASE_URL || "https://restful-booker.herokuapp.com";
const USER = process.env.BOOKER_USERNAME;
const PASS = process.env.BOOKER_PASSWORD;

test.describe("Authentication and Authorization - Restful Booker", () => {
  test(
    "Login, obtain token and perform authorized update",
    { tag: ["@regression", "@smoke"] },
    async () => {
      test.skip(
        !USER || !PASS,
        "Set BOOKER_USERNAME and BOOKER_PASSWORD to run this test.",
      );

      const auth = new AuthService(BASE);
      const token = await auth.login(USER!, PASS!);
      expect(token).toBeTruthy();

      const tokenManager = new TokenManager();
      tokenManager.setToken(token);

      const api = await ApiFactory.create(BASE, tokenManager);

      // create booking (public)
      const createRes = await api.post("/booking", {
        firstname: "Jane",
        lastname: "Doe",
        totalprice: 123,
        depositpaid: true,
        bookingdates: { checkin: "2025-01-01", checkout: "2025-01-02" },
        additionalneeds: "Breakfast",
      });
      expect(createRes.status()).toBe(200);
      const body = await createRes.json();
      const id = body.bookingid;
      expect(typeof id).toBe("number");

      // update booking - requires auth token (via Cookie or Authorization)
      const updateRes = await api.put(
        `/booking/${id}`,
        {
          firstname: "Jane",
          lastname: "Updated",
          totalprice: 123,
          depositpaid: true,
          bookingdates: { checkin: "2025-01-01", checkout: "2025-01-02" },
          additionalneeds: "Breakfast",
        },
        { "Content-Type": "application/json", Accept: "application/json" },
      );

      expect(updateRes.status()).toBe(200);

      await api.dispose();
    },
  );

  test(
    "Unauthorized update without token should fail (401/403)",
    { tag: ["@regression", "@sanity"] },
    async () => {
      const api = await ApiFactory.create(BASE);

      const createRes = await api.post("/booking", {
        firstname: "NoToken",
        lastname: "User",
        totalprice: 50,
        depositpaid: false,
        bookingdates: { checkin: "2025-01-01", checkout: "2025-01-02" },
        additionalneeds: "None",
      });
      expect(createRes.status()).toBe(200);
      const body = await createRes.json();
      const id = body.bookingid;

      const updateRes = await api.put(
        `/booking/${id}`,
        {
          firstname: "Should",
          lastname: "Fail",
          totalprice: 50,
          depositpaid: false,
          bookingdates: { checkin: "2025-01-01", checkout: "2025-01-02" },
          additionalneeds: "None",
        },
        { "Content-Type": "application/json" },
      );

      const status = updateRes.status();
      expect(status === 401 || status === 403).toBeTruthy();

      await api.dispose();
    },
  );

  test(
    "Unauthorized update with invalid token should fail (401/403)",
    { tag: ["@regression", "@sanity"] },
    async () => {
      const tokenManager = new TokenManager();
      tokenManager.setToken("this-is-invalid-token-xyz");

      const api = await ApiFactory.create(BASE, tokenManager);

      const createRes = await api.post("/booking", {
        firstname: "Invalid",
        lastname: "Token",
        totalprice: 60,
        depositpaid: false,
        bookingdates: { checkin: "2025-01-01", checkout: "2025-01-02" },
        additionalneeds: "None",
      });
      expect(createRes.status()).toBe(200);
      const body = await createRes.json();
      const id = body.bookingid;

      const updateRes = await api.put(
        `/booking/${id}`,
        {
          firstname: "Should",
          lastname: "Fail",
          totalprice: 60,
          depositpaid: false,
          bookingdates: { checkin: "2025-01-01", checkout: "2025-01-02" },
          additionalneeds: "None",
        },
        { "Content-Type": "application/json" },
      );

      const status = updateRes.status();
      expect(status === 401 || status === 403).toBeTruthy();

      await api.dispose();
    },
  );
});
