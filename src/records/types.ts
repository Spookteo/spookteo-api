export interface RecordInfos {
    _id?: string;
    date: Date;
    pressure: number;
    temperature: Array<number>;
    hygrometry: number;
    brightness: number;
  }