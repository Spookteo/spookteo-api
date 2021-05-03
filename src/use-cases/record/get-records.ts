import { makeRecord } from "../../models";

interface MakeGetRecordsOptionsInterface {
  recordsDb: any; // TODO : better typing
}

/**
 * @brief function to build addUser (see addUser documentation for more details)
 *
 * @param userDb an object with multiple functions to interact with the database
 *
 * @return a function to add a user in the database
 */
export default function makeGetRecords({
  recordsDb,
}: MakeGetRecordsOptionsInterface) {
  /**
   * TODO : comment and type !
   */
  return async function getRecords({}: any): Promise<any[]> {
    return (await recordsDb.getRecords({})).map(makeRecord);
  };
}
