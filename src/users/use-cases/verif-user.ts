import { userRepository } from "@users/data-access";
import { encryptString } from "@shared/encrypt-tools";


export async function verifUser(login: string, key: string): Promise<{userId: string, role: string}> {
    const salt = await userRepository.getUserSalt({username: login});

    // If the user does not exists return null

    if (!salt) return null;

    // Encrypt the key
    const hashedKey = encryptString(key, salt);

    // Check the validity of the credentials
    const user = await userRepository.doesUserExists({username: login, key: hashedKey});
    if (!user) return null;

    return {
        userId: user._id,
        role: user.role
    }
}