const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Three Points");
});

app.listen(port, () => {
  console.log("Server Listening on Port: 8080");
});

module.exports = app;
