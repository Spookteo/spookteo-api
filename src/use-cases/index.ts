import {recordsDb, userDb} from "../data-access";
import makeAddRecord from "./record/add-record";
import makeAddUser from "./user/add-user";


const USER_COLLECTION:string = 'users';

const addUser = makeAddUser({userDb});

const addRecord = makeAddRecord({recordsDb});



export {
    addUser,
    addRecord
}