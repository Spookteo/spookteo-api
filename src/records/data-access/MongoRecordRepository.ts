import { Db, FilterQuery } from "mongodb";
import { RecordInfos } from "../types";
import { GetRecordsOptions, RecordRepository } from "./RecordRepository";



interface MakeRecordDbOptions {
    makeDb: () => Promise<Db>;
    collection: string;
}

export class MongoRecordRepository extends RecordRepository implements MakeRecordDbOptions {

    makeDb: () => Promise<Db>;
    collection: string;

    constructor(options: MakeRecordDbOptions) {
        super();
        this.makeDb = options.makeDb;
        this.collection = options.collection;
    }


    /**
     * This function save a record in the database
     * @param recordsInfos informations to save
     */
    async saveRecords(recordsInfos: RecordInfos[]) {
        const db = await this.makeDb();

        const result = await db
            .collection(this.collection)
            .insertMany(recordsInfos);
            
        const insertedInfos = result.ops;
        return insertedInfos;
    }

    /**
     * This function return all records from the database
     * @param options Options passed
     */
    async getRecords({ user }: GetRecordsOptions) {

        const query: FilterQuery<any> = {};

        if (user) query.username = user;

        const db = await this.makeDb()
        const result = await db 
            .collection(this.collection)
            .find(query);
        
        return await result.toArray();
    }
    
}
