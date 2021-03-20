import ResponseError from "../../models/ResponseError";

export default function makeAddUser({addUser}) {
    return async function addUser (httpRequest) {
        const {username, role} = httpRequest.body;
        const userCreated = await addUser({ 
            username: username,
            role: role
        });
    }
}