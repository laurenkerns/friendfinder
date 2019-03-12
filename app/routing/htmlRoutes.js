//include path file to get the correct path 
const path = require("path");

module.exports = function(app){
    //HTML Get request
    //home
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //survey
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //DEFAULT if no mathcing route is found default to home
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};