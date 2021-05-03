export default abstract class RecordClass {

    protected _id:string;
    protected date:Date;
    protected pressure:string;
    protected temperature:string[];
    protected hygrometry:string;
    protected brightness:string;

    constructor({
        _id,
        date,
        pressure,
        temperature,
        hygrometry,
        brightness,
      }) {
        this._id = _id;
        this.date = date;
        this.pressure = pressure;
        this.temperature = temperature;
        this.hygrometry = hygrometry;
        this.brightness = brightness;
    }

    abstract getId():string;
    abstract getDate():Date;
    abstract getPressure():string;
    abstract getTemperature():string[];
    abstract getHygrometry():string;
    abstract getBrightness():string;
}