import { response } from "express";
import { HttpRequest } from "../types";

const RESPONSE_ERROR_NAME = "ResponseError";

export default function makeCallback(
  controller: (request: HttpRequest) => Promise<any>
) {
  return (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      role: req.role,
      userId: req.userId
    };
    // Execute the controller function
    controller(httpRequest)
      .then((data) => {
        // Success : return the response
        return response.json({
          status: "ok",
          data,
        });
      })
      .catch((error) => {
        // Fail : if the error is a response error, send it, else send a 500 error
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
