import { test, expect } from "@playwright/test";
import { PrintInformationHelper } from "../../lib/helpers/printResponse";
import { requestDataAuth } from "../../lib/datafactory/auth";


test.describe("auth/login peticion Post @auth", async () => {

    test("Post con credenciales validas @happy", async ({ request }) => {
        PrintInformationHelper.printInformationRequest("no hay headers", requestDataAuth)

        const response = await request.post('auth/login', {
            data : requestDataAuth
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.text();
        const header = await response.headers();

        expect(body).toBe("");
        expect(header["set-cookie"]).toContain("token=")

        PrintInformationHelper.printInformationResponse(response.status(), header, body )
    })

})