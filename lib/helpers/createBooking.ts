import { faker } from "@faker-js/faker";
import { createHeader } from "./createHeaders";
import { expect, request } from "@playwright/test";
import Env from "./env";

const url = Env.URL || "https://automationintesting.online/";

export async function createBooking(){
  let body;

    const headers = await createHeader();

  let  bookingBody = {
      roomid: 10,
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      depositpaid: Math.random() < 0.5, //returns true or false
      email: faker.internet.email(),
      phone: faker.string.numeric(11),
      bookingdates: {
        checkin: "2024-11-01",
        checkout: "2024-11-03",
      },
    };

    const createRequestContext = await request.newContext();
    const response = await createRequestContext.post(url + "booking/", {
      headers: headers,
      data: bookingBody,
    });

    expect(response.status()).toBe(201);
    body = await response.json();
    return body;
}
