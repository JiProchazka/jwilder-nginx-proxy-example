var express = require("express");
var app = express();

app.get("/api", (req, res, next) => {
  res.json({ hello: "world 2" });
});

app.listen(80, () => {
  console.log("Server running on port 3001");
});
