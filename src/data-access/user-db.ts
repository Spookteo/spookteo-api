import { Db } from "mongodb";
import { UserInfos } from "../types";

interface MakeUserDbOptions {
  makeDb: () => Promise<Db>;
  collection: string;
}

export default function makeUserDb({ makeDb, collection }: MakeUserDbOptions) {
  return Object.freeze({
    insert,
    getUserSalt,
    doesUserExists
  });

  async function insert(user) {
    const db = await makeDb();

    const res = await db.collection(collection).insertOne({
      _id: user.getId(),
      username: user.getUsername(),
      key: user.getKey(),
      salt: user.getSalt(),
      role: user.getRole(),
    });

    return await res.ops[0];
  }

  async function getUserSalt({
    username,
  }: {
    username: string;
  }): Promise<string | null> {
    const db = await makeDb();

    const res = await db.collection(collection).find({ username });

    const responses = await res.toArray();

    return responses.length ? responses[0].salt : null;
  }

  async function doesUserExists({
    username,
    key,
  }: {
    username: string;
    key: string;
  }) {
    const db = await makeDb();

    const res = await db.collection(collection).find({ username, key });

    const results =  await res.toArray();

    return results.length ? results[0] : null;
  }
}
