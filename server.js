const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node-c");
});

app.listen("3000");
