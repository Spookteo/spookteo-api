import { userRepository } from "../repository";
import { generateSalt } from "../tools/ecryptData";
import { UserInfos, Role } from "../types";

/**
 * User type contains all the user informations
 * 
 * @field id : unique number to identiy a user
 * @field username : name defined by user to indentify himself
 * @field key : key generated to secure authentification
 * @field sel : salt generated to encrypt the key in database
 * @field role : user's role to know what he is allowed to do
 *
 * @methods save : create a new user in the database with the information in the object
 */
export default class User {

    _id?:string;
    username:string;
    key:string;
    sel?:string
    role:Role;

    constructor(userInfos: UserInfos) {
        this._id = userInfos._id ?? null;
        this.username = userInfos.username;
        this.key = userInfos.key ?? generateSalt(64);
        this.sel = userInfos.sel ?? generateSalt(256);
        this.role = userInfos.role;
    }

    async save() {
        return await userRepository.saveUser({
            ...this
        })
    }


    
}