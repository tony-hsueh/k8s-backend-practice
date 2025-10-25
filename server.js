const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node f");
});

app.listen("3000");
