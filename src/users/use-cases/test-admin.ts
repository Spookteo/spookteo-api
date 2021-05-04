import {UserRepository} from "../data-access";

interface MakeTestAdminOptions {
    userRepository: UserRepository;
}

export default function makeTestAdmin({userRepository}: MakeTestAdminOptions){
    return async function testAdmin({}){
        return userRepository.doesAdminExists({});
    }
}