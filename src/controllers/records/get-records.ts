import { HttpRequest, Role } from "../../types";

interface MakeGetRecord {
    getRecords
}

export default function makeGetRecord({getRecords}: MakeGetRecord) {
    return async function getRecord(req:HttpRequest<{}, {}, {username: string, role: string}>):Promise<any> {
        // All users are authorize for Read

        const records = (await getRecords({})).map(r => ({
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