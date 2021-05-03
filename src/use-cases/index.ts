import makeGetRecords from "./record/get-records";
import {recordsDb, userRepository} from "../data-access";
import makeAddRecord from "./record/add-records";
import makeAddUser from "./user/add-user";
import makeTestAdmin from './user/test-admin';


const addUser = makeAddUser({userRepository});

const addRecords = makeAddRecord({recordsDb});

const getRecords = makeGetRecords({recordsDb});

const testAdmin = makeTestAdmin({userRepository});


export {
    addUser,
    addRecords,
    getRecords,
    testAdmin
}