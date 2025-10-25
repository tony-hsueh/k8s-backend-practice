const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node e");
});

app.listen("3000");
