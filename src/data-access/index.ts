import { makeDb } from "../tools/dbConnection";
import makeRecordDb from "./record-db";
import makeUserDb from "./user-db";

// There is no need to type a variable if you assign a value on the same line
const USER_COLLECTION = "users";
const RECORD_COLLECTION = "records";

const userDb = makeUserDb({makeDb, collection:USER_COLLECTION});

const recordsDb = makeRecordDb({makeDb, collection:RECORD_COLLECTION});

export {
    userDb,
    recordsDb
}
