import { ResponseError } from "../../models";
import { HttpRequest, Role } from "../../types";

interface MakePostRecord {
  addRecords;
}

export default function makePostRecords({ addRecords }: MakePostRecord) {
  return async function postRecords(
    req: HttpRequest<
      {},
      {},
      Array<{
        date: Date;
        pressure: number;
        temperature: Array<number>;
        hygrometry: number;
        brightness: number;
      }>
    >
  ): Promise<any> {
    // Verify the rights
    if (req.role == Role.READ) {
      throw new ResponseError("UNAUTHORIZED", 403);
    }

    const requestRecords = req.body;
    
    if (!Array.isArray(requestRecords)) {
        throw new ResponseError("BAD_REQUEST", 400);
    }

    const records = await addRecords(requestRecords);

    return  {records};
  }
}
