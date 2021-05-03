import { RecordInfos } from "../types";
import RecordClass from "./RecordClass";

export default function buildRecord({makeId}) {
  const isValidId = (id: string) => true;
  const isValidDate = (date: Date) => true;
  const isValidPressure = (pressure: number) => true;
  const isValidTemperature = (temperature: number[]) => true;
  const isValidHygrometry = (hygrometry: number) => true;
  const isValidBrightness = (brightness: number) => true;

  class Record extends RecordClass {

    constructor({
      _id = makeId(),
      date,
      pressure,
      temperature,
      hygrometry,
      brightness,
    }) {
      super({
        _id,
        date,
        pressure,
        temperature,
        hygrometry,
        brightness,
      })

      if (_id && !isValidId(_id)) {
        throw Error("Invalid id");
      }
      if (!isValidDate(date)) {
        throw Error("Invalid date");
      }
      if (!isValidPressure(pressure)) {
        throw Error("Invalid pressure");
      }
      if (!isValidTemperature(temperature)) {
        throw Error("Invalid temperature");
      }
      if (!isValidHygrometry(hygrometry)) {
        throw Error("Invalid hygrometry");
      }
      if (!isValidBrightness(brightness)) {
        throw Error("Invalid brightness");
      }

    }

    public getId(){
      return this._id;
    };

    public getPressure(){
      return this.pressure;
    }

    public getDate() {
      return this.date;
    }

    public getTemperature() {
      return this.temperature;
    }

    public getHygrometry() {
      return this.hygrometry;
    }

    public getBrightness() {
      return this.brightness;
    }

  }

  return Record;

}
