import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./src/router";
const app = express();

app.use(bodyParser.json());


// Add routes
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send("SERVER_ERROR");
});

export default app;
