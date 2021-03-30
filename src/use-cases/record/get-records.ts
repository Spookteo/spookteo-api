import { makeUser, ResponseError } from "../../models";
import { UserInfos } from "../../types";

interface MakeGetRecordsOptionsInterface {
    recordDb: any // TODO : better typing
}

/**
 * @brief function to build addUser (see addUser documentation for more details)
 * 
 * @param userDb an object with multiple functions to interact with the database
 * 
 * @return a function to add a user in the database
 */
export default function makeGetRecords({recordDb}: MakeGetRecordsOptionsInterface) {
    /**
     * TODO : comment and type !
     */
    return async function getRecords({}:any):Promise<any[]>{

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