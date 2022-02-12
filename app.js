const express = require("express");

const app = express();

const port = process.env.PORT || 8080

app.use(express.json());

app.get("/", (res, req) => {
  res.send("Hola Three Points");
});

app.listen(8080, () => {
  console.log("Server Listening on Port: 8080");
});

module.exports = app;
