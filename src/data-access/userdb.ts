import { Db } from "mongodb";
import { Role, UserInfos, UserSchema } from "../types";
import UserRepository from "./userRepository";

export interface UserRepositoryMongoOptions {
  makeDb: () => Promise<Db>;
  collection: string;
}

export default class UserRepositoryMongo extends UserRepository {
    
    private collection: string;
    
    private makeDb: () => Promise<Db>

    constructor({ makeDb, collection }: UserRepositoryMongoOptions) {
        super();
        this.makeDb = makeDb;
        this.collection = collection;
    }

    /**
     * @inheritdoc
     * @param user 
     * @returns 
     */
  public async insert(user: UserSchema) {
    const db = await this.makeDb();

    const res = await db.collection(this.collection).insertOne({
      ...user
    });

    return res.ops.length ? res.ops[0] : null;
  }

  public async getUserSalt({
    username,
  }: {
    username: string;
  }): Promise<string | null> {
    const db = await this.makeDb();

    const res = await db.collection(this.collection).find({ username });

    const responses = await res.toArray();

    return responses.length ? responses[0].salt : null;
  }

  public async doesUserExists({
    username,
    key,
  }: {
    username: string;
    key: string;
  }) {
    const db = await this.makeDb();

    const res = await db.collection(this.collection).find({ username, key });

    const results =  await res.toArray();

    console.log({results});

    return results.length ? results[0] : null;
  }

  public async doesAdminExists({}) {
    const db = await this.makeDb();

    const res = await db.collection(this.collection).find({ role: Role.ADMIN });

    return await res.count() > 0;
  }
}
