import { Response } from "express";

const RESPONSE_ERROR_NAME = "ResponseError";

export default class ResponseError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message.toUpperCase().replace(" ", "_"));
    this.code = code;
    this.name = RESPONSE_ERROR_NAME;
  }

  static sendResponseError(res: Response, e: ResponseError) {
    if (e.name === RESPONSE_ERROR_NAME) {
      return res.status(e.code).send(e.message);
    }
    console.error(e);
    return res.status(500).send("SERVER_ERROR");
  }
}