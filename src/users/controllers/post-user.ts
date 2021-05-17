import { ResponseError, HttpRequest } from "@shared/express-tools";
import {Role} from "@shared/types";
import {UserInfos} from "@users/types";

interface MakePostUserOptions {
    addUser:(userInfos:UserInfos) => Promise<UserInfos>,
    validRole: (maybeRole: string) => Role
}

export default function makePostUser({ addUser, validRole }: MakePostUserOptions) {
    return async function postUser(req:HttpRequest<{}, {}, {username: string, role: string}>):Promise<{user: UserInfos}> {

        // Verify arguments
        if (!req.body.role || typeof req.body.role != 'string' || !req.body.username || typeof req.body.username != 'string') {
            throw new ResponseError("BAD_REQUEST", 400);
        }

        // Parse the request
        const user: UserInfos = {
            username: req.body.username,
            role: validRole(req.body.role),
        }
        
        // Return an error if the role is not valid
        if (!user.role) {
            throw new ResponseError("INVALID_ROLE", 400);
        }
        
        // Verify the rights
        if (req.user.role != Role.ADMIN) {
            throw new ResponseError("UNAUTHORIZED", 403); 
        }

        // Create the user
        const posted = await addUser({
            ...user
        });

        const createdUser = {
            _id: posted._id,
            username: posted.username,
            key: posted.key,
            role: posted.role
        };

        return {user: createdUser};

    }
}