//link routes to a series of "data sources"
//arrays of data will hold data from all possible friends

const possibleFriends = require("../data/friends.js");

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
    let newFriendInput = req.body;
    let newFriendScore = newFriendInput.scores;
    let newFriendName = "";
    let newFriendPhoto = "";
    //use dummy difference 
    let totalDifference = 100; 


    // loop through all friends 
    for (var i = 0; i < possibleFriends.length; i++){
        let difference = 0;
            for( var f = 0; f <newFriendScore.length; f++){
                difference += Math.abs(possibleFriends[i].scores[j] - newFriendScore[f]);
            }
            if (difference < totalDifference){
                totalDifference = difference;
                newFriendName = possibleFriends[i].name;
                newFriendPhoto = possibleFriends[i].photo;
            }
    }
    //push to friends array
    possibleFriends.push(newFriendInput);
    res.json({status: 'OK', newFriendName : newFriendName, newFriendPhoto : newFriendPhoto});

    
});
};
