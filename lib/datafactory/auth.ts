import Env from "../helpers/env";


export const requestDataAuth : { [key: string]: string | undefined} = {
    username: Env.ADMIN_NAME,
    password: Env.ADMIN_PASSWORD
}
