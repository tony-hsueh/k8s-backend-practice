const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node b!");
});

app.get("/env", (req, res) => {
  res.json({
    API_URL: process.env.API_URL,
    APP_ENV: process.env.APP_ENV,
    APP_NAME: process.env.APP_NAME,
  });
});

// Liveness Probe: /livez
// 只檢查應用是否存活，不檢查 DB
app.get("/livez", (req, res) => {
  res.status(200).send("Alive");
});

// Readiness Probe: /readyz
// 檢查應用是否能提供服務，例如 DB 已連線
app.get("/readyz", (req, res) => {
  res.status(200).send("Ready");
});

app.listen("3000");
