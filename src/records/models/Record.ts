

export interface RecordProperties {
  makeId: () => string;
}

const isValidId = (id: string) => true;
const isValidDate = (date: Date) => true;
const isValidPressure = (pressure: number) => true;
const isValidTemperature = (temperature: number[]) => true;
const isValidHygrometry = (hygrometry: number) => true;
const isValidBrightness = (brightness: number) => true;

export class Record {
  protected static makeId: () => string;

  static init({ makeId }: RecordProperties): void {
    Record.makeId = makeId;
  }

  protected _id: string;
  protected _date: Date;
  protected _pressure: number;
  protected _temperature: number[];
  protected _hygrometry: number;
  protected _brightness: number;

  constructor({ _id = Record.makeId(), date, pressure, temperature, hygrometry, brightness }) {
    if (!isValidId(_id)) {
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

    this._id = _id;
    this._date = date;
    this._pressure = pressure;
    this._temperature = temperature;
    this._hygrometry = hygrometry;
    this._brightness = brightness;
  }

  get id(): string {
    return this._id;
  }
  get date(): Date {
    return this._date;
  }
  get pressure(): number {
    return this._pressure;
  }
  get temperature(): number[] {
    return this._temperature;
  }
  get hygrometry(): number {
    return this._hygrometry;
  }
  get brightness(): number {
    return this._brightness;
  }
}
