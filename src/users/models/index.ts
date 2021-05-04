import { encryptString, generateRandomString } from "@shared/encrypt-tools";
import {makeId} from "../../shared/id";
import { User } from "./User";


User.init({makeId, encryptString, generateRandomString});

export {User};