import { Router } from "express";
import makeCallback from "../express-callback";
import { getRecords, postRecords } from "./controllers";


const recordRouter = Router();

recordRouter.get('/', makeCallback(getRecords));
recordRouter.post('/', makeCallback(postRecords));

export {recordRouter};