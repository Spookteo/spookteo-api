import { recordRepository } from "../data-access";
import makeAddRecords from "./add-records";
import makeListRecords from "./list-records";


export const addRecords = makeAddRecords({recordRepository});
export const listRecords = makeListRecords({recordRepository});

