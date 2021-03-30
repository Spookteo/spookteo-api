import { verifUser } from "../userAuthentifier";
import buildAuthenticationMiddleware from "./authenticationMiddleware";


const AuthenticationMiddleware = buildAuthenticationMiddleware({verifUser});

export {
    AuthenticationMiddleware
}