const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node a");
});

app.listen("3000");
