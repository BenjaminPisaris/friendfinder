//Load data from /../data/friends.js
var friends = require("friends");

//Routing
//JSON the friends array from friends.js when the API is called
app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

//POST request for when a survey gets submitteds
app.post("/api/friends", function(req, res){

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
    var Difference;

    //Loop through all possible users

        //Inside the loop, make another loop that goes through each users score

            //compare the absolute difference of each score
        
        //If the sum of the scores differences is less than the current closest score
        //make that your new bestFriend

    //push userData to the friends array

    //return a JSON with the users best match

});