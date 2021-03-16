import makeId from "./makeId";
import buildMakeUser from "./User";

/**
 * Generate a user object
 * 
 * @field id : unique number to identiy a user
 * @field username : name defined by user to indentify himself
 * @field key : key generated to secure authentification
 * @field sel : salt generated to encrypt the key in database
 * @field role : user's role to know what he is allowed to do
 *
 * @methods save : create a new user in the database with the information in the object
 */
const makeUser = buildMakeUser({makeId});

/**
 * Record type contains data from station censors
 *
 * @field id : unique number to identiy a record
 * @field date : moment of the record
 * @field pressure : pressure recorded by the censor
 * @field temperature : temperature recorded by the censor
 * @field hygrometry : hygrometry recorded by the censor
 *
 * @methods save : save a record the the database
 */
const makeRecord = buildMakeUser({makeId});

export {
    makeUser,
    makeRecord
};