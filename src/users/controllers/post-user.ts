import { ResponseError } from "../../models";
import {HttpRequest, Role, UserInfos} from "../../types";

interface MakePostUserOptions {
    addUser:(userInfos:UserInfos) => Promise<UserInfos>,
    getRole: (maybeRole: string) => Role
}

export default function makePostUser({ addUser, getRole }: MakePostUserOptions) {
    return async function postUser(req:HttpRequest<{}, {}, {username: string, role: string}>):Promise<{user: UserInfos}> {

        // Verify arguments
        if (!req.body.role || typeof req.body.role != 'string' || !req.body.username || typeof req.body.username != 'string') {
            throw new ResponseError("BAD_REQUEST", 400);
        }

        // Parse the request
        const user: UserInfos = {
            username: req.body.username,
            role: getRole(req.body.role),
        }
        
        // Return an error if the role is not valid
        if (!user.role) {
            throw new ResponseError("INVALID_ROLE", 400);
        }
        
        // Verify the rights
        if (req.role != Role.ADMIN) {
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