import { response } from "express";
import { AuthenticatedRequest } from "../types";

const RESPONSE_ERROR_NAME = "ResponseError";

module.exports = function makeExpressCallback(
  controller: (request: AuthenticatedRequest) => Promise<any>
) {
  return (req, res) => {
    const httpRequest: AuthenticatedRequest = {
      ...req,
    };
    controller(httpRequest)
      .then((data) => {
        return response.json({
          status: "ok",
          data,
        });
      })
      .catch((error) => {
        if (error.name === RESPONSE_ERROR_NAME) {
          return res.status(error.code).json({
            status: "ko",
            message: error.message,
          });
        }
        console.error(error);
        return res.status(500).json({
          ok: "ko",
          message: "SERVER_ERROR",
        });
      });
  };
};
