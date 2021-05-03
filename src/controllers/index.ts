import { getRole } from "../tools/validRole";
import { addUser, getRecords, addRecords } from "../use-cases";
import makePostUser from "./user/post-user";
import makeGetRecord from './records/get-records';
import makePostRecords from './records/post-records';


const postUser = makePostUser({addUser, getRole});

const getRecord = makeGetRecord({getRecords});
const postRecords = makePostRecords({addRecords});

export {
    postUser,
    getRecord,
    postRecords
};
