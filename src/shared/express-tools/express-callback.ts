import { HttpRequest } from "./types";

const RESPONSE_ERROR_NAME = "ResponseError";

export function makeCallback(
  controller: (request: HttpRequest) => Promise<any>
) {
  return (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      user: req.user
    };
    // Execute the controller function
    controller(httpRequest)
      .then((data) => {
        // Success : return the response
        return res.json({
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
