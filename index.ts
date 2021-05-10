import 'module-alias/register';
import { PORT } from '@shared/environment';
import app from "./src";

app.isReady.then(() => {
const server = app.listen(PORT, () => {
    // @ts-ignore
    const port = server.address().port;
    console.log("App running on port", port);
  });
});