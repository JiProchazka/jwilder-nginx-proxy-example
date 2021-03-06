var express = require("express");
var axios = require("axios");
var app = express();

app.get("/api", (req, res, next) => {
  res.json({ hello: "world" });
});

app.get("/api-proxy", async (req, res, next) => {
  const response = await axios.get("http://testt2.dev.localhost:3001/api");
  response.data.proxy = true;
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
