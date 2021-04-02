import { GetRecordsOptions } from "../../data-access/record-db";
import { makeRecord, ResponseError } from "../../models";
import { RecordInfos } from "../../types";

interface MakeAddRecordOptionsInterface {
    recordsDb: {
        saveRecord: (recordsInfos: RecordInfos) => Promise<any>;
        getRecords: ({}: GetRecordsOptions) => Promise<any[]>;
    }
}

/**
 * @brief function to build addRecord (see addRecord documentation for more details)
 * 
 * @param recordsDb an object with multiple functions to interact with the database
 * 
 * @return a function to add a record in the database
 */
export default function makeAddRecord({recordsDb}: MakeAddRecordOptionsInterface) {
    /**
     * @brief function to add a record in the database
     * 
     * @param recordInfo information of the record who will be created
     * 
     * @return a Promise with the infos of the record added to the database
     * 
     * @throws 500 : throws error 500 if the record cannot be register in the database
     */
    return async function addRecord(recordInfo:RecordInfos):Promise<RecordInfos>{

        // user creation with his data in parameters
        const record = makeRecord(recordInfo);

        const savedRecord = await recordsDb.saveRecord({
            _id: record.getId(),
            date: record.getDate(),
            pressure: record.getPressure(),
            temperature: record.getTemperature(),
            hygrometry: record.getHygrometry(),
            brightness: record.getBrightness()
        });

        if (savedRecord) {
            return savedRecord
        }
        else {
            throw new ResponseError("Problème lors de l'enregistrement du record", 500);
        }



        // user insertion in the database
        

        // if insertion succeed : return of user's info. Otherwise, throwing of a 500 error
        

        

    };
};