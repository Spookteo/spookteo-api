import { Db } from "mongodb";
import { RecordInfos } from "../types";


export interface GetRecordsOptions {

} 

interface MakeRecordDbOptions {
    makeDb: () => Promise<Db>;
    collection: string;
}

export default function makeRecordDb({makeDb, collection}: MakeRecordDbOptions) {

    return Object.freeze({
        saveRecord,
        getRecords
    });
    

    /**
     * This function save a record in the database
     * @param recordsInfos informations to save
     */
    async function saveRecord(recordsInfos: RecordInfos) {
        const db = await makeDb();

        const result = await db
            .collection(collection)
            .insertOne(recordsInfos);
            
        const insertedInfos = result.ops[0];
        return insertedInfos;
    }

    /**
     * This function return all records from the database
     * @param options Options passed
     */
    async function getRecords({}: GetRecordsOptions) {
        const db = await makeDb()
        const result = await db 
            .collection(collection)
            .find();
        
        return await result.toArray();
    }
}
