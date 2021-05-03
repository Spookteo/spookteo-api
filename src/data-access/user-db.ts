import { Db } from "mongodb";
import { Role, UserInfos } from "../types";

interface MakeUserDbOptions {
  makeDb: () => Promise<Db>;
  collection: string;
}

export default function makeUserDb({ makeDb, collection }: MakeUserDbOptions) {
  return Object.freeze({
    insert,
    getUserSalt,
    doesUserExists,
    doesAdminExists
  });

  async function insert(user) {
    const db = await makeDb();

    const res = await db.collection(collection).insertOne({
      ...user
    });

    return res.ops.length ? res.ops[0] : null;
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

    console.log({results});

    return results.length ? results[0] : null;
  }

  async function doesAdminExists({}) {
    const db = await makeDb();

    const res = await db.collection(collection).find({ role: Role.ADMIN });

    return await res.count() > 0;
  }
}
