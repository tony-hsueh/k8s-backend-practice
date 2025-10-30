const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world !");
});

// Liveness Probe: /livez
// 只檢查應用是否存活，不檢查 DB
app.get("/livez", (req, res) => {
  res.status(200).send("Alive");
});

// Readiness Probe: /readyz
// 檢查應用是否能提供服務，例如 DB 已連線
app.get("/readyz", (req, res) => {
  if (!dbConnected) {
    return res.status(500).send("Not Ready");
  }
  res.status(200).send("Ready");
});

app.listen("3000");
