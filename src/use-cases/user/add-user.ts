import { Db } from "mongodb";
import { makeUser } from "../../models";
import { UserInfos } from "../../types";

export default function makeAddUser({makeDb, collection}: {makeDb: () => Promise<Db>, collection:string}) {
    return async function addUser(userInfo:UserInfos){

        const db = await makeDb();
        const user = makeUser(userInfo);

        // TODO : vérifier les informations du user (user non existant...)

        const res = await db.collection(collection).insertOne({
            _id: user.getId(),
            username: user.getUsername(),
            key: user.getKey(),
            salt: user.getSalt(),
            role: user.getRole()
        });

        return await res;

    };
};