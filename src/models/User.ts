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
export default function buildMakeUser({makeId}: {makeId: () => string}, generateSalt) {
    const isValidId = (id: string) => true;
    const isValidUsername = (username: string) => true;
    const isValidKey = (key: string) => true;
    const isValidSalt = (salt: string) => true;
    const isValidRole = (role: string) => true;

    return function makeUser ({
        _id = makeId(),
        username,
        key = generateSalt(256),
        salt = generateSalt(64),
        role
    })  {
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

        return Object.freeze({
            getId: () => _id,
            getUsername: () => username,
            getKey: () => key,
            getSalt: () => salt,
            getRole: () => role,
        });


    }
}
