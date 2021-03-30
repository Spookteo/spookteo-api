import { ResponseError } from "../../models";
import { HttpRequest, Role } from "../../types";

interface MakePostRecord {

}

export default function makePostRecord({}: MakePostRecord) {
    return async function postUser(req:HttpRequest<{}, {}, {username: string, role: string}>):Promise<any> {

        // Verify the rights
        if (req.role == Role.READ) {
            throw new ResponseError("UNAUTHORIZED", 403); 
        }
    } 
}