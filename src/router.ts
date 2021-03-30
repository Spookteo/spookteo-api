import { Router } from "express";
import { postUser } from "./controllers";
import makeCallback from "./express-callback";


const apiV0Router = Router();

// Users

// create a new user
apiV0Router.post('/user', makeCallback(postUser))

// add new records

// get gecords

export default apiV0Router;