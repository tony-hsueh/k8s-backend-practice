const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node F");
});

app.get("/env", (req, res) => {
  res.json({ message: "hello node F", env: process.env.APP_ENV });
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
