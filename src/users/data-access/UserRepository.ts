import { UserInfos, UserSchema } from "@users/types";

export abstract class UserRepository {

  abstract insert(user: UserSchema): Promise<UserInfos>;

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
