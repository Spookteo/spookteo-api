import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../types";

export default function buildAuthenticationMiddleware({verifUser}: {verifUser: (login: string, key: string) => Promise<{userId: string, role: string}>}) {
    return async function authenticationMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
        const login = req.headers['X-Access-User'];
        const key = req.headers['X-Access-Key'];

        if (!login || typeof login != 'string' || !key || typeof key != 'string') {
            return res.status(401).send('Unauthorized');
        }
        
        // Verify the user identity
        const user = await verifUser(login, key);

        if (user == null) {
            return res.status(401).send('Unauthorized');
        }


        // Add user informations to the request (role and id)
        req.user = user;

        // forward the request
        return next();
    }
}
