//Load data from /../data/friends.js
var friends = require("../data/friends");

//Routing
module.exports = function (app) {
    //JSON the friends array from friends.js when the API is called
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //POST request for when a survey gets submitteds
    app.post("/api/friends", function (req, res) {

        //Create a placeholder object for the closest match
        var bestFriend = {
            name: null,
            photo: null,
            scoreDiff: Infinity
        };

        //Parse the survey results into variables
        var userData = req.body;
        var userScores = userData.scores;

        //Create a variable that will be used to compare userScores with every other users score
        var difference;

        //Loop through all possible users
        for (var i = 0; i < friends.length; i++) {
            //Inside the loop, make another loop that goes through each users score
            var friend = friends[i];
            difference = 0;
            //log friend.name for troubleshooting
            console.log(friend.name);
            //compare the absolute difference of each score
            for (x = 0; x < friend.scores.length; x++) {
                var friendScore = friend.scores[x];
                var myScore = userScores[x];
                difference += Math.abs(parseInt(myScore) - parseInt(friendScore));
            }
            //If the sum of the scores differences is less than the current closest score
            if (difference < bestFriend.scoreDiff) {
                //make that your new bestFriend
                bestFriend.name = friend.name;
                bestFriend.photo = friend.photo;
                scoreDiff = difference;
            }


        }
        //push userData to the friends array
        friends.push(userData)
        //return a JSON with the users best match
        res.json(bestFriend);
    })
};