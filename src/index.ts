import * as express from "express";
import { AuthenticationMiddleware } from "./shared/express-tools";
import router from "./router";
import { Role } from "@shared/types";
import { addUser, testAdmin } from "./users/use-cases";
import * as cors from "cors";

type SpoukteoApp = express.Express & {isReady?: Promise<void>};

const app: SpoukteoApp = express();

app.use(express.json())

const corsOptions: cors.CorsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    exposedHeaders: ["X-Access-User",
        "X-Access-Key"],
  };

app.use(cors(corsOptions));

app.use(AuthenticationMiddleware);

app.use('/api/v0', router);

app.isReady = (async () => {
    const adminExists = await testAdmin({});

    if (!adminExists) {
        const user = await addUser({username: 'admin', role: Role.ADMIN});

        console.log("Default admin has been created :");
        console.log("\tUsername : " + user.username);
        console.log("\tAccess Key : " + user.key);

    }
})();



export default app;