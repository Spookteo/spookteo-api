import { adminMiddleware } from "@shared/express-tools/middlewares";
import { Router } from "express";
import { makeCallback } from "../shared/express-tools";
import { postUser } from "./controllers";


const userRouter = Router();

userRouter.post('/', adminMiddleware, makeCallback(postUser));

export {userRouter};
