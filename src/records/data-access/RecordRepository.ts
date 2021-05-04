import { RecordInfos } from "../types";


export interface GetRecordsOptions {

} 

export abstract class RecordRepository {

    abstract saveRecords(recordsInfos: RecordInfos[]);
    abstract getRecords({}: GetRecordsOptions)

}