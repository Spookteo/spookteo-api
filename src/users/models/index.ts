import { encryptString, generateRandomString } from "../../tools/ecryptData";
import {makeId} from "../../id";
import { User } from "./User";


User.init({makeId, encryptString, generateRandomString});

export {User};