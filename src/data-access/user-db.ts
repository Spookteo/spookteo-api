import { Db } from "mongodb";
import { UserInfos } from "../types";

export default function makeUserDb({makeDb, collection}: {makeDb: () => Promise<Db>, collection:string}) {
    return Object.freeze({
        insert
    });

    async function insert(user) {

        const db = await makeDb();

        const res = await db.collection(collection).insertOne({
            _id: user.getId(),
            username: user.getUsername(),
            key: user.getKey(),
            salt: user.getSalt(),
            role: user.getRole()
        });

        return await res;
    }
}