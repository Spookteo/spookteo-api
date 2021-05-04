import { writeMiddleware } from "@shared/express-tools/middlewares";
import { Router } from "express";
import {makeCallback} from "../shared/express-tools";
import { getRecords, postRecords } from "./controllers";


const recordRouter = Router();

recordRouter.get('/', makeCallback(getRecords));
recordRouter.post('/', writeMiddleware, makeCallback(postRecords));

export {recordRouter};