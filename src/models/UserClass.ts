import { Role } from "../types";

export default abstract class UserClass {

    protected _id: string;
    protected username: string;
    protected key: string;
    protected salt: string;
    protected role: Role;

    constructor({
        _id,
        username,
        key,
        salt,
        role,
      }) {
        this._id = _id;
        this.username = username;
        this.key = key;
        this.salt = salt;
        this.role = role;
      }

  abstract getId(): string;

  abstract getUsername(): string;

  abstract getKey(): string;

  abstract getSalt(): string;

  abstract getRole(): Role;

  abstract getHashedKey(): string;
}
