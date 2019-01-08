
//dependencies

var express = require('express');
var path = require("path");

//sets up the express

var app = express();
var PORT = process.env.PORT || 3000;

//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//gets route data from files

// require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//starts the server listening

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});