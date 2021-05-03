import { Router } from "express";
import { postUser, getRecord, postRecords } from "./controllers";
import makeCallback from "./express-callback";
import { AuthenticationMiddleware } from "./middlewares";


const apiV0Router = Router();

apiV0Router.use(AuthenticationMiddleware);

// Users

// create a new user
apiV0Router.post('/user', makeCallback(postUser))

// Records

// add new records
apiV0Router.post('/record', makeCallback(postRecords));

// get gecords
apiV0Router.get('/record', makeCallback(getRecord))

export default apiV0Router;