// DEPENDENCIES //
const express = require("express");
const path = require("path");

//Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// SERVER LISTENING 
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });