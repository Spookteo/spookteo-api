import {listRecords, addRecords} from "../use-cases";
import makeGetRecord from "./get-records";
import { makePostRecords } from "./post-record";


export const  getRecords = makeGetRecord({listRecords});
export const postRecords = makePostRecords({addRecords});