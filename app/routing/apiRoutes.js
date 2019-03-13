//link routes to a series of "data sources"
//arrays of data will hold data from all possible friends

const possibleFriends = require("../data/friends.js");

module.exports = function(app){
//GET REQUEST//handles when users visit a page

app.get("/api/friends", function(req,res){
    return res.json(possibleFriends);
});

//POST REQUEST//server responds to request
//Save data once submitted
app.post("/api/friends", function(req,res){
    let friendMatch = req.body;
    possibleFriends.push(friendMatch);
    res.json(findFriend(friends));
    
});
}


function findFriend(){


}