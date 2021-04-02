import { makeUser, ResponseError } from "../../models";
import { UserInfos } from "../../types";

interface MakeAddUserOptionsInterface {
    userDb: {
        insert: (user:UserInfos)=>Promise<any>
        getUserSalt: ({ username, }: { username: string; }) => Promise<string>;
        doesUserExists: ({ username, key, }: { username: string; key: string; }) => Promise<any>;
    }
}

/**
 * @brief function to build addUser (see addUser documentation for more details)
 * 
 * @param userDb an object with multiple functions to interact with the database
 * 
 * @return a function to add a user in the database
 */
export default function makeAddUser({userDb}: MakeAddUserOptionsInterface) {
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
        const user = makeUser(userInfo);

        // TODO : vérifier les informations du user (user non existant...)

        // user insertion in the database
        const res = await userDb.insert({
            _id: user.getId(),
            username: user.getUsername(),
            key: user.getKey(),
            salt: user.getSalt(),
            role: user.getRole()
        })

        // if insertion succeed : return of user's info. Otherwise, throwing of a 500 error
        if (res) {
            return {
                _id: user.getId(),
                username: user.getUsername(),
                key: user.getKey(),
                role: user.getRole()
            }
        }
        else {
            throw new ResponseError("Problème lors de l'enregistrement du user", 500);
        }

        

    };
};