import { Role } from "../../types";

const isValidId = (id: string) => true;
const isValidUsername = (username: string) => true;
const isValidKey = (key: string) => true;
const isValidSalt = (salt: string) => true;
const isValidRole = (role: string) => true;

export interface UserProperties {
  makeId: () => string;
  encryptString: (key: string, salt: string) => string;
  generateRandomString: (size: number) => string;
}

export class User {
  protected static makeId: () => string;
  protected static encryptString: (key: string, salt: string) => string;
  protected static generateRandomString: (size: number) => string;

  protected _id: string;
  protected _username: string;
  protected _key: string;
  protected _salt: string;
  protected _role: Role;

  static init(options: UserProperties) {
    User.makeId = options.makeId;
    User.encryptString = options.encryptString;
    User.generateRandomString = options.generateRandomString;
  }

  constructor({
    _id = User.makeId(),
    username,
    key = User.generateRandomString(64),
    salt = User.generateRandomString(64),
    role,
  }) {
    this._id = _id;
    this._username = username;
    this._key = key;
    this._salt = salt;
    this._role = role;

    if (_id && !isValidId(_id)) {
      throw Error("Invalid id");
    }
    if (!isValidUsername(username)) {
      throw Error("Invalid username");
    }
    if (key && !isValidKey(key)) {
      throw Error("Invalid key");
    }
    if (salt && !isValidSalt(salt)) {
      throw Error("Invalid salt");
    }
    if (!isValidRole(role)) {
      throw Error("Invalid role");
    }
  }

  get id() {
    return this._id;
  }

  get username() {
    return this._username;
  }

  get key() {
    return this._key;
  }

  get salt() {
    return this._salt;
  }

  get role() {
    return this._role;
  }

  get hashedKey() {
    return User.encryptString(this._key, this._salt);
  }
}
