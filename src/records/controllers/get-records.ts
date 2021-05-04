import { HttpRequest } from "@shared/express-tools";

interface MakeGetRecord {
    listRecords
}

export default function makeGetRecord({listRecords}: MakeGetRecord) {
    return async function getRecord(req:HttpRequest<{}, {}, {username: string, role: string}>):Promise<any> {
        // All users are authorize for Read

        const records = (await listRecords({})).map(r => ({
            _id: r.getId(),
            temperature: r.getTemperature(),
            date: r.getDate(),
            brightness: r.getBrightness(),
            pressure: r.getPressure(),
            hygrometry: r.getHygrometry(),
        }));

        return {records};
        
    } 
}