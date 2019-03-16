//link routes to a series of "data sources"
//arrays of data will hold data from all possible friends

var possibleFriends = require("../data/friends.js");
// console.log(possibleFriends);
// console.log(possibleFriends.length);
console.log(possibleFriends.scores);


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
    
    // console.log(newFriendScores);

    var newFriendInfo = req.body
    var newFriendScores = newFriendInfo.scores
    var matchFriend = {
        matchedName: "",
        matchedPhoto: "",
        totalDiff: 50
    };

    console.log(newFriendScores);
    console.log(newFriendInfo);

     
    // loop through all friends and compare current user's data against friends.js
    console.log(possibleFriends);
    for (var i = 0; i < possibleFriends.length; i++){
        
            var diff = 0;

        for (var f = 0; f < possibleFriends[i].scores.length; f++){
            diff += Math.abs(possibleFriends[f].scores - newFriendInfo.totalDiff);  //math.abs returns an absolute value
        }
            if (diff <= matchFriend.totalDiff){
                matchFriend.matchedName = possibleFriends[i].name;
                matchFriend.matchedPhoto = possibleFriends[i].photo;
            }
    }
    //push to friends array
    possibleFriends.push(newFriendInfo);
    res.json(matchFriend);

    
});
};
