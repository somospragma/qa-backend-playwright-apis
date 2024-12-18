import { request } from "@playwright/test";
import Env from "./env";
import { requestDataAuth } from "../datafactory/auth";

export async function createHeader(){
    const contextRequest= await request.newContext({
        baseURL: Env.URL
    })
    const response = await contextRequest.post('auth/login', {
        data : requestDataAuth
    })
    const headers = response.headers();
    const tokenString = headers["set-cookie"].split(";")[0];
    return {'cookie' : `${tokenString}` }
}