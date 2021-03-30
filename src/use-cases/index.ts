import {userDb} from "../data-access";
import makeAddUser from "./user/add-user";


const USER_COLLECTION:string = 'users';

const addUser = makeAddUser(userDb);



export {
    addUser
}