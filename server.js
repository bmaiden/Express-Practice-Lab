// load express
const express = require("express");

// create express app
const app = express();

// "root" route directory
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

// add port for app to listen on
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
