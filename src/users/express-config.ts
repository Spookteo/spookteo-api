import { Router } from "express";
import { postUser } from "./controllers";


const userRouter = Router();

userRouter.post('/', postUser);

export {userRouter};
