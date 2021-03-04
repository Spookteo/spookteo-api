import { recordRepository } from "../repository";
import { RecordInfos } from "../types";

/**
 * Record type contains data from station censors
 * 
 * @field id : unique number to identiy a record
 * @field date : moment of the record
 * @field pressure : pressure recorded by the censor
 * @field temperature : temperature recorded by the censor
 * @field hygrometry : hygrometry recorded by the censor
 *
 * @methods save : save a record the the database
 */
export default class Record {

    _id?:string;
    date:Date;
    pressure:number;
    temperature:Array<number>;
    hygrometry:number;

    constructor(recordInfos: RecordInfos) {
        this._id = recordInfos._id ?? null;
        this.date = recordInfos.date;
        this.pressure = recordInfos.pressure;
        this.temperature = recordInfos.temperature;
        this.hygrometry = recordInfos.hygrometry;
    }


    /**
     * this method save a record in the database
     * 
     * @param void
     * 
     * @return void
     */
    async save() {
        return await recordRepository.saveRecord({
            ...this
        })
    }
}