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
    makeDb: () => Promise<Db>;

    constructor({makeDb}: UserRepositoryOptions) {
        this.makeDb = makeDb;
    }

    /**
     * This function save a user in the database
     * @param usersInfos informations to save
     */
    async saveUser(usersInfos: UserInfos) {
        const db = await this.makeDb();

        const result = await db
            .collection(USER_COLLECTION)
            .insertOne(usersInfos);
            
        const insertedInfos = result.ops[0];
        return new User(insertedInfos);
    }

    /**
     * This function return all users from the database
     * @param options Options passed
     */
    async getUsers(options: GetUsersOptions) {
        const db = await this.makeDb()
        const result = await db 
            .collection(USER_COLLECTION)
            .find();
        
        console.log(await result.toArray());
        
        return (await result.toArray()).map((user) => 
            new User(user)
        ) 
    }

}