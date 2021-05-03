import { Role } from "../types";
import UserClass from "./UserClass";
/**
 * User type contains all the user informations
 *
 * @field id : unique number to identiy a user
 * @field username : name defined by user to indentify himself
 * @field key : key generated to secure authentification
 * @field sel : salt generated to encrypt the key in database
 * @field role : user's role to know what he is allowed to do
 *
 * @methods save : create a new user in the database with the information in the object
 */

export default function buildUser({
  makeId,
  encryptString,
  generateRandomString,
}: {
  makeId: () => string;
  encryptString: (key: string, salt: string) => string;
  generateRandomString: (size: number) => string;
}) {
  class User extends UserClass {
    private isValidId = (id: string) => true;
    private isValidUsername = (username: string) => true;
    private isValidKey = (key: string) => true;
    private isValidSalt = (salt: string) => true;
    private isValidRole = (role: string) => true;

    constructor({
      _id = makeId(),
      username,
      key = generateRandomString(64),
      salt = generateRandomString(64),
      role,
    }) {
      super({
        _id,
        username,
        key,
        salt,
        role,
      });

      if (_id && !this.isValidId(_id)) {
        throw Error("Invalid id");
      }
      if (!this.isValidUsername(username)) {
        throw Error("Invalid username");
      }
      if (key && !this.isValidKey(key)) {
        throw Error("Invalid key");
      }
      if (salt && !this.isValidSalt(salt)) {
        throw Error("Invalid salt");
      }
      if (!this.isValidRole(role)) {
        throw Error("Invalid role");
      }
    }

    public getId() {
      return this._id;
    }

    public getUsername() {
      return this.username;
    }

    public getKey() {
      return this.key;
    }

    public getSalt() {
      return this.salt;
    }

    public getRole() {
      return this.role;
    }

    public getHashedKey() {
      return encryptString(this.key, this.salt);
    }
  }

  return User;
}
