import { Db } from "mongodb";
import User from "../models/User";
import { UserInfos } from "../types";

interface UserRepositoryOptions {
    makeDb: () => Promise<Db>
}

interface GetUsersOptions {

}

const USER_COLLECTION = 'users';

export default class UserRepository {
    

}