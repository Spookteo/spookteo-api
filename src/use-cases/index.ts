import { makeDb } from "../tools/dbConnection";
import makeAddUser from "./user/add-user";


const USER_COLLECTION:string = 'users';

const addUser = makeAddUser({makeDb, collection:USER_COLLECTION});



export {
    addUser
}