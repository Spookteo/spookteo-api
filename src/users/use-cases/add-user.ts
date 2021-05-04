import {UserRepository} from "../data-access";
import { ResponseError } from "../../shared/express-tools";
import { UserInfos } from "@users/types";
import { User } from "../models";

interface MakeAddUserOptionsInterface {
    userRepository: UserRepository;
}

/**
 * @brief function to build addUser (see addUser documentation for more details)
 * 
 * @param userDb an object with multiple functions to interact with the database
 * 
 * @return a function to add a user in the database
 */
export default function makeAddUser({userRepository}: MakeAddUserOptionsInterface) {
    /**
     * @brief function to add a user in the database
     * 
     * @param userInfo information of the user who will be created
     * 
     * @return a Promise with the infos of the user added to the database
     * 
     * @throws 500 : throws error 500 if the user cannot be register in the database
     */
    return async function addUser(userInfo:UserInfos):Promise<UserInfos>{

        // user creation with his data in parameters
        const user = new User(userInfo);

        // TODO : vérifier les informations du user (user non existant...)

        // user insertion in the database
        const res = await userRepository.insert({
            _id: user.id,
            username: user.username,
            key: user.hashedKey,
            salt: user.salt,
            role: user.role
        })

        // if insertion succeed : return of user's info. Otherwise, throwing of a 500 error
        if (res) {
            return {
                _id: user.id,
                username: user.username,
                key: user.key,
                role: user.role
            }
        }
        else {
            throw new ResponseError("Problème lors de l'enregistrement du user", 500);
        }

        

    };
};