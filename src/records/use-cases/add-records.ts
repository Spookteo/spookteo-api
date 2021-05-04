import { RecordInfos } from "../types";
import { Record } from "../models";
import { RecordRepository } from "../data-access/RecordRepository";

interface MakeAddRecordsOptionsInterface {
    recordRepository: RecordRepository
}

/**
 * @brief function to build addRecord (see addRecord documentation for more details)
 * 
 * @param recordsDb an object with multiple functions to interact with the database
 * 
 * @return a function to add a record in the database
 */
export default function makeAddRecords({recordRepository}: MakeAddRecordsOptionsInterface) {
    /**
     * @brief function to add a record in the database
     * 
     * @param recordInfo information of the record who will be created
     * 
     * @return a Promise with the infos of the record added to the database
     * 
     * @throws 500 : throws error 500 if the record cannot be register in the database
     */
    return async function addRecords(recordsInfos:RecordInfos[]):Promise<RecordInfos>{

        // user creation with his data in parameters

        const records = recordsInfos.map(recordInfo => new Record(recordInfo));

        const savedRecords = await recordRepository.saveRecords(records.map(record => ({
            _id: record.id,
            temperature: record.temperature,
            date: record.date,
            brightness: record.brightness,
            pressure: record.pressure,
            hygrometry: record.hygrometry
        })));


        return savedRecords;
    };
};