import { ResponseError } from "../../models";
import { HttpRequest, Role } from "../../types";

interface MakePostRecord {
    addRecord
}

function makePostRecord({addRecord}: MakePostRecord) {
    return async function postRecord(req:HttpRequest<{}, {}, {date:Date; pressure:number; temperature:Array<number>; hygrometry:number; brightness:number;}>):Promise<any> {

        // Verify the rights
        if (req.role == Role.READ) {
            throw new ResponseError("UNAUTHORIZED", 403);
        }

        const {date, pressure, temperature, hygrometry, brightness} = req.body;

        // TODO : eventuelles vérifications des informations

        const createdRecord = await addRecord({
            date: date,
            pressure: pressure,
            temperature: temperature,
            hygrometry: hygrometry,
            brightness: brightness
        });

        return {record: createdRecord}
    } 
}

function makePostRecords({addRecord}: MakePostRecord) {
    return async function postRecords(req:HttpRequest<{}, {}, Array<{date:Date; pressure:number; temperature:Array<number>; hygrometry:number; brightness:number;}>>):Promise<any> {

        // Verify the rights
        if (req.role == Role.READ) {
            throw new ResponseError("UNAUTHORIZED", 403);
        }

        let createdRecords = []
        for (const currentRecord of req.body){
            
            const {date, pressure, temperature, hygrometry, brightness} = currentRecord;

            // TODO : eventuelles vérifications des informations

            const createdRecord = await addRecord({
                date: date,
                pressure: pressure,
                temperature: temperature,
                hygrometry: hygrometry,
                brightness: brightness
            });

            if(createdRecord){
                createdRecords.push(createdRecord);
            }
            else {
                // TODO : trouver une meilleur gestion des erreur (je ne renvoie pas d'erreur pour éviter qu'un record défaillant n'empêche le reste de s'enregistrer)
                console.info("impossible to add this record to the database : ");
                console.info({date, pressure, temperature, hygrometry, brightness});
            }

        }

        return {record: createdRecords}
    } 
}