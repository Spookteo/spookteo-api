import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "@shared/express-tools/types";

export default function buildAuthenticationMiddleware({verifUser}: {verifUser: (login: string, key: string) => Promise<{userId: string, role: string}>}) {
    return async function authenticationMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
        const login = req.headers['x-access-user'];
        const key = req.headers['x-access-key'];

        if ((!login) || typeof login != 'string' || (!key) || typeof key != 'string') {
            return res.status(401).json({status: 'ko', message: 'UNAUTHORIZED'});
        }
        
        // Verify the user identity
        const user = await verifUser(login, key);

        if (user == null) {
            console.error("Invalid user");
            return res.status(401).json({status: 'ko', message: 'UNAUTHORIZED'});
        }


        // Add user informations to the request (role and id)
        req.user = user;

        // forward the request
        return next();
    }
}
