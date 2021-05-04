import {ObjectID} from  'mongodb';

export function makeId():string {
    return new ObjectID().toHexString();
}