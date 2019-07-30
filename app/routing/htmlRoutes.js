//Dependencies

var path = require("path");

//routing

module.exports = function(app){

app.get("/survey", function(req, res){
    res.sendFile(path.join(_dirname, "../public/tables.html"));
});



}