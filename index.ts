import app from "./app";

const server = app.listen(8080, () => {
    // @ts-ignore
    const port = server.address().port;
    console.log("App running on port", port);
  });