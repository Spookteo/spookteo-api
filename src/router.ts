import { Router } from "express";
import { AuthenticationMiddleware } from "./shared/express-tools/middlewares";
import { recordRouter } from "./records/express-config";
import { userRouter } from "./users/express-config";


const apiV0Router = Router();

apiV0Router.use(AuthenticationMiddleware);

// Users
apiV0Router.use('/user', userRouter);

// Records
apiV0Router.use('/record', recordRouter);

export default apiV0Router;