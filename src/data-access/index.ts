import { makeDb } from "../tools/dbConnection";
import makeUserDb from "./user-db";

const USER_COLLECTION:string = "users";

const userDb = makeUserDb({makeDb, collection:USER_COLLECTION});

export {
    userDb
}