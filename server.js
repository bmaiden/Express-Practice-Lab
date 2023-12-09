// load express
const express = require("express");

// create express app
const app = express();

// configure the app (app.set)

// mount middleware (app.use)

// "root" route directory
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

// other route directories
app.get("/home", function (req, res) {
  res.send("<h1>Home Page</h1>");
});

// add port for app to listen on
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
