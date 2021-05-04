import { getRole } from "../../tools/validRole";
import { addUser } from "../use-cases";
import makePostUser from "./post-user";


export const postUser = makePostUser({addUser, getRole});
