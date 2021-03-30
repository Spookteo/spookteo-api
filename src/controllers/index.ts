import { getRole } from "../tools/validRole";
import { addUser } from "../use-cases";
import makePostUser from "./user/post-user";


const postUser = makePostUser({addUser, getRole});

export {
    postUser
};
