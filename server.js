const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("hello node d !");
});

app.get("/env", (_, res) => {
  res.json({
    appEnv: process.env.APP_ENV,
    appName: process.env.APP_NAME,
    apiUrl: process.env.API_URL,
  });
});

app.listen("3000");
