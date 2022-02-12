const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (res, req) => {
  res.send("Hola Three Points");
});

        app.listen (80, () => {
            console.log("Server Listening on Port: 80")
        });

