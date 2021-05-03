import { GetRecordsOptions } from "../../data-access/record-db";
import { makeRecord, ResponseError } from "../../models";
import { RecordInfos } from "../../types";

interface MakeAddRecordsOptionsInterface {
    recordsDb: {
        saveRecords: (recordsInfos: RecordInfos[]) => Promise<any>;
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
export default function makeAddRecords({recordsDb}: MakeAddRecordsOptionsInterface) {
    /**
     * @brief function to add a record in the database
     * 
     * @param recordInfo information of the record who will be created
     * 
     * @return a Promise with the infos of the record added to the database
     * 
     * @throws 500 : throws error 500 if the record cannot be register in the database
     */
    return async function addRecords(recordsInfo:RecordInfos[]):Promise<RecordInfos>{

        // user creation with his data in parameters

        const records = recordsInfo.map(makeRecord)

        const savedRecords = await recordsDb.saveRecords(records.map(record => ({
            _id: record.getId(),
            temperature: record.getTemperature(),
            date: record.getDate(),
            brightness: record.getBrightness(),
            pressure: record.getPressure(),
            hygrometry: record.getHygrometry()
        })));


        return savedRecords;
    };
};