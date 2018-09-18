//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//create express server
var app = express();

//set port
var PORT = process.env.PORT || 8080;

//use the bodyParser middleware
//Parse json and urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
