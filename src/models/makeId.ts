import {ObjectID} from  'mongodb';

export default function makeId():string {
    return new ObjectID().toHexString();
}