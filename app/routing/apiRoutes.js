//link routes to a series of "data sources"
//arrays of data will hold data from all possible friends

const possibleFriends = require("../data/friends.js");

//export module
module.exports = function(app){

//GET REQUEST//handles when users visit a page

app.get("/api/friends", function(req,res){
    return res.json(possibleFriends);

});

//POST REQUEST//server responds to request
//Save data once submitted
app.post("/api/friends", function(req,res){
    //Use data from survey and store in variables
    let friendScore = req.body.score;
    let newFriend = {
        nfName: "",
        nfPhoto: "",
        nfDifference: 15
    };


    // loop through all friends 
    for (var i = 0; i < possibleFriends.length; i++){
        let totalDifference = 0;
            for( var f = 0; i <possibleFriends[i].length; i++){
                totalDifference += Math.abs(friendScore[f] - possibleFriends[i].scores[f]);
            }
            if (totalDifference <= newFriend.nfDifference){
                newFriend.nfName = possibleFriends[i].name;
                newFriend.nfPhoto = possibleFriends[i].photo;
            }
    }
    //push to friends array
    possibleFriends.push(req.body);
    res.json(newFriend)

    
});
}


function findFriend(){


}