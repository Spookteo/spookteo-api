import { verifUser } from "@users/use-cases";
import buildAuthenticationMiddleware from "./authenticationMiddleware";


const AuthenticationMiddleware = buildAuthenticationMiddleware({verifUser});

export {
    AuthenticationMiddleware
}