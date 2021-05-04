import { RecordRepository } from "../data-access/RecordRepository";
import { Record } from "../models";

interface MakeListRecordsOptionsInterface {
  recordRepository: RecordRepository;
}


export default function makeListRecords({
  recordRepository,
}: MakeListRecordsOptionsInterface) {
  /**
   * TODO : comment and type !
   */
  return async function listRecords({}: any): Promise<any[]> {
    return (await recordRepository.getRecords({})).map(record => new Record(record));
  };
}
