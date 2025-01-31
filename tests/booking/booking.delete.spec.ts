import { test, expect } from "@playwright/test";
import { createHeader } from "../../lib/helpers/createHeaders";
import { createBooking } from "../../lib/helpers/createBooking";


test.describe("booking/{id} DELETE requests @booking", async () => {
  let headers;
  let bookingId;

  test.beforeAll(async () => {
    headers = await createHeader();
    const newBooking = await createBooking();
    bookingId = newBooking.bookingid;
  });



  test("DELETE booking with specific room id: @happy", async ({ request }) => {
    const response = await request.delete(`booking/${bookingId}`, {
      headers: headers,
    });

    expect(response.status()).toBe(202);

    const body = await response.text();
    expect(body).toBe("");

  });

  test("DELETE booking with an id that doesn't exist", async ({ request }) => {
    const response = await request.delete("booking/999999", {
      headers: headers,
    });
    expect(response.status()).toBe(404);
    const body = await response.text();
    expect(body).toBe("");
  });

  test("DELETE booking id without authentication", async ({ request }) => {
    const response = await request.delete("booking/3");
    expect(response.status()).toBe(403);
    const body = await response.text();
    expect(body).toBe("");
  });
});
