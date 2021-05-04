import { MongoRecordRepository } from "./MongoRecordRepository";
import { makeDb } from "@shared/database";

import { RecordRepository } from "./RecordRepository";

const RECORD_COLLECTION = "records";

const recordRepository: RecordRepository = new MongoRecordRepository({
  makeDb,
  collection: RECORD_COLLECTION,
});

export { recordRepository, RecordRepository };
