import { Router } from "express";
import { makeCallback } from "../shared/express-tools";
import { postUser } from "./controllers";


const userRouter = Router();

userRouter.post('/', makeCallback(postUser));

export {userRouter};
