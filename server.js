const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node-d");
});

app.listen("3000");
