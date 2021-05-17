import { Record } from "@records/models";
import { HttpRequest } from "@shared/express-tools";

interface MakeGetRecord {
    listRecords
}

export default function makeGetRecord({listRecords}: MakeGetRecord) {
    return async function getRecord(req:HttpRequest<{}, {user?: string}, {}>):Promise<any> {

        const {user} = req.query;

        // All users are authorize for Read
        const records = (await listRecords({user})).map((r: Record) => ({
            _id: r.id,
            temperature: r.temperature,
            date: r.date,
            brightness: r.brightness,
            pressure: r.pressure,
            hygrometry: r.hygrometry,
            user: r.username
        }));

        return {records};
        
    } 
}