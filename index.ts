import 'module-alias/register';
import app from "./src";

app.isReady.then(() => {
const server = app.listen(8080, () => {
    // @ts-ignore
    const port = server.address().port;
    console.log("App running on port", port);
  });
});