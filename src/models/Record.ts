import { RecordInfos } from "../types";

export default function buildMakeRecord({}) {
  const isValidId = (id: string) => true;
  const isValidDate = (date: Date) => true;
  const isValidPressure = (pressure: number) => true;
  const isValidTemperature = (temperature: number[]) => true;
  const isValidHygrometry = (hygrometry: number) => true;

  return function makeRecord({
    _id,
    date,
    pressure,
    temperature,
    hygrometry,
  }: RecordInfos) {
    if (_id && !isValidId(_id)) {
      throw new Error("Invalid id");
    }
    if (!isValidDate(date)) {
      throw new Error("Invalid id");
    }
    if (!isValidPressure(pressure)) {
      throw new Error("Invalid id");
    }
    if (!isValidTemperature(temperature)) {
      throw new Error("Invalid id");
    }
    if (!isValidHygrometry(hygrometry)) {
      throw new Error("Invalid id");
    }

    return Object.freeze({
        getId: () => _id,
        getDate: () => date,
        getPressure: () => pressure,
        getTemperature: () => temperature,
        getHygrometry: () => hygrometry,
    });
  };
}
