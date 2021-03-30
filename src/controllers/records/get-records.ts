import { HttpRequest, Role } from "../../types";

interface MakeGetRecord {
}

export default function makeGetRecord({}: MakeGetRecord) {
    return async function getUser(req:HttpRequest<{}, {}, {username: string, role: string}>):Promise<any> {

        
    } 
}