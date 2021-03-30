import express from "express";
import { AuthenticationMiddleware } from "./middlewares";
import router from "./router";

const app = express()

app.use(express.json())

app.use(AuthenticationMiddleware);

app.use('/api/v0', router);