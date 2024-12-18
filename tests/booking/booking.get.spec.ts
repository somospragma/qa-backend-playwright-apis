import { test, expect } from "@playwright/test";
import { PrintInformationHelper } from "../../lib/helpers/printResponse";
import Ajv from 'ajv';
import { schemaSummaryBooking } from "../../lib/helpers/schema";
import { createHeader } from "../../lib/helpers/createHeaders";

const ajv = new Ajv();

test.describe("booking/ peticion get @booking" , async () => {
    let header;

    test.beforeAll(async () => {
        header = await createHeader();
    })
    
    test("obtener el resumen de reservas por id de cuarto @happy", async ({ request }) => {
        const response = await request.get("booking/summary?roomid=1");

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.bookings.length).toBeGreaterThanOrEqual(1);

        const validate = ajv.compile(schemaSummaryBooking)
        const valid = validate(body);
        expect(valid).toBe(true)
    })

    test("obtener todos las reservas con detalles @happy", async ({ request }) => {
        PrintInformationHelper.printInformationRequest(header)
        const response = await request.get("booking/", {
            headers : header
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.bookings.length).toBeGreaterThanOrEqual(1);

        const validate = ajv.compile(schemaSummaryBooking)
        const valid = validate(body);
        expect(valid).toBe(false)
    })
})

