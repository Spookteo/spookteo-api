import UserRepository from "../../data-access/userRepository";

interface MakeTestAdminOptions {
    userRepository: UserRepository;
}

export default function makeTestAdmin({userRepository}: MakeTestAdminOptions){
    return async function testAdmin({}){
        return userRepository.doesAdminExists({});
    }
}