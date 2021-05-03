import UserClass from "../models/UserClass";
import { UserSchema } from "../types";

export default abstract class UserRepository {

  abstract insert(user: UserSchema): Promise<UserClass>;

  abstract getUserSalt({
    username,
  }: {
    username: string;
  }): Promise<string | null>;

  abstract doesUserExists({
    username,
    key,
  }: {
    username: string;
    key: string;
  }): Promise<UserSchema | null>;

  abstract doesAdminExists({}): Promise<boolean>;
}
