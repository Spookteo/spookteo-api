import { userRepository } from "../data-access";
import makeAddUser from "./add-user";
import makeTestAdmin from "./test-admin";


const addUser = makeAddUser({userRepository});
const testAdmin = makeTestAdmin({userRepository});

export {
    addUser,
    testAdmin
}

export {validRole} from './validRole';
export {verifUser} from './verif-user'
