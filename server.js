const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world ! I'm feature");
});

app.listen("3000");
