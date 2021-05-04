const RESPONSE_ERROR_NAME = "ResponseError";

export class ResponseError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message.toUpperCase().replace(" ", "_"));
    this.code = code;
    this.name = RESPONSE_ERROR_NAME;
  }
}