//Dependencies

var express = require("express");
 
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

 // Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

//Router
app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})