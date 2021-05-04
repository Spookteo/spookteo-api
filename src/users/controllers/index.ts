import { validRole } from "../use-cases";
import { addUser } from "../use-cases";
import makePostUser from "./post-user";


export const postUser = makePostUser({addUser, validRole});
