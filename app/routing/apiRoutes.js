//link routes to a series of "data sources"
//arrays of data will hold data from all possible friends

var possibleFriends = require("../data/friends.js");

//export module
module.exports = function(app){

//GET REQUEST//handles when users visit a page

app.get("/api/friends", function(req,res){
    res.json(possibleFriends);

});

//POST REQUEST//server responds to request
//Save data once submitted
app.post("/api/friends", function(req,res){
    //Use data from survey and store in variables
    // let userInput = req.body;
    // console.log(userInput);
    var userScores = req.body.scores;
    var minDifference = 50;  //dummy number

     
    // loop through all friends and compare current user's data against friends.js
    for (let i = 0; i < possibleFriends.length; i++){
        var totalDifference = 0;
//////ERROR LINE 32
        for (let f = 0; f < userScores.length; f++){
            var difference = Math.abs(possibleFriends[i].scores[f] - userScores[f]);  //math.abs returns an absolute value
            totalDifference += difference;
            }
            if (totalDifference < minDifference){
                minDifference = totalDifference;
                var bestMatch = i;
                
            }
    }
    //push to friends array
    possibleFriends.push(req.body);
    res.json(possibleFriends[bestMatch]);

    
});
};
