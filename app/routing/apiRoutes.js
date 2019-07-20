var path = require("path");
var responses = require("../data/responses.js");
var friends = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.send(friends);
    })

    app.post("/api/friends", function(req, res) {
        var userScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;

    for (var i = 0; i < friends.length; i++) {
        var scoreDiff = 0;
        for (var j = 0; j < userScore.length; j++) {
            scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j])))
        }
        scoresArr.push(scoreDiff);
    } 
    
    for (var i = 0; i < scoresArr.length; i++) {
        if (scoresArr[i] <= scoresArr[bestMatch]) {
            bestMatch = i;
        }
    }

    var marvFriend = friends[bestMatch];
    res.json(marvFriend);
        friends.push(req.body);
        // res.status(200).send(userScore);
    });
    
}


    

