// load express
const express = require("express");
const path = require("path");

// create express app
const app = express();

// configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// mount middleware (app.use)

// "root" route directory
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

// other route directories
app.get("/home", function (req, res) {
  res.render("home");
});

// add port for app to listen on
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
