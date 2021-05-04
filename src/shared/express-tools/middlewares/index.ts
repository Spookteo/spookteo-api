import { Role } from "@shared/types";
import { verifUser } from "@users/use-cases";
import buildAuthenticationMiddleware from "./authenticationMiddleware";
import { buildRoleMiddleware } from "./roleMiddleware";


const AuthenticationMiddleware = buildAuthenticationMiddleware({verifUser});
const adminMiddleware = buildRoleMiddleware(Role.ADMIN);
const writeMiddleware = buildRoleMiddleware(Role.WRITE);

export {
    AuthenticationMiddleware,
    adminMiddleware,
    writeMiddleware
}