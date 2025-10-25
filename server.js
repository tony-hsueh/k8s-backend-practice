const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node a");
});

app.get("/test", (req, res) => {
  res.json({ message: "hello node a", status: "success" });
});

app.get("/env", (req, res) => {
  res.json({
    API_URL: process.env.API_URL,
    APP_ENV: process.env.APP_ENV,
    status: "success",
  });
});

app.listen("3000");
