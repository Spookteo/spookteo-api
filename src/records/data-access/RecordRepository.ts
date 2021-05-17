import { RecordInfos } from "../types";


export interface GetRecordsOptions {
    user?: string
} 

export abstract class RecordRepository {

    abstract saveRecords(recordsInfos: RecordInfos[]);
    abstract getRecords({user}: GetRecordsOptions)

}