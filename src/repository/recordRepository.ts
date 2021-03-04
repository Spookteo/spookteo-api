import { Db } from "mongodb";
import Record from "../models/Record";
import { RecordInfos } from "../types";

interface RecordRepositoryOptions {
    makeDb: () => Promise<Db>
}

interface GetRecordsOptions {

}

const RECORD_COLLECTION = 'records';

export default class RecordRepository {
    makeDb: () => Promise<Db>;

    constructor({makeDb}: RecordRepositoryOptions) {
        this.makeDb = makeDb;
    }

    /**
     * This function save a record in the database
     * @param recordsInfos informations to save
     */
    async saveRecord(recordsInfos: RecordInfos) {
        const db = await this.makeDb();

        const result = await db
            .collection(RECORD_COLLECTION)
            .insertOne(recordsInfos);
            
        const insertedInfos = result.ops[0];
        return insertedInfos;
    }

    /**
     * This function return all records from the database
     * @param options Options passed
     */
    async getRecords(options: GetRecordsOptions) {
        const db = await this.makeDb()
        const result = await db 
            .collection(RECORD_COLLECTION)
            .find();
        
        console.log(await result.toArray());
        
        return (await result.toArray()).map((record) => 
            new Record(record)
        ) 
    }
}