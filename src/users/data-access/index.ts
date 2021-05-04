import { MongoUserRepository } from "./MongoUserRepository";
import { makeDb } from "@shared/database";

import { UserRepository } from "./UserRepository";

const USER_COLLECTION = "users";

const userRepository: UserRepository = new MongoUserRepository({
  makeDb,
  collection: USER_COLLECTION,
});

export { userRepository, UserRepository };
