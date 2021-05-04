import { MongoUserRepository } from "./MongoUserRepository";
import { makeDb } from "../../tools/dbConnection";

import { UserRepository } from "./UserRepository";

const USER_COLLECTION = "users";

const userRepository: UserRepository = new MongoUserRepository({
  makeDb,
  collection: USER_COLLECTION,
});

export { userRepository, UserRepository };
