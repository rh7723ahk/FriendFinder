var path = require("path");


var friendList = require("../data/friends.js");


module.exports = function(app) {

    app.get('/api/friendlist', function(req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function(req, res) {

        var surveyInput = req.body;
        console.log(req.body);

        var surveyAnswers = surveyInput.answers;
        console.log(surveyAnswers);

        var matchAnswers = friendlist[i].answers;
        console.log("matchAnswers: " + matchAnswers);

        var totalDiff = 0;

        var bestMatch = {
            name: "You have to fill out all of the content to have a match!",
            photoLink: "",
            friendDiff: 100
        };
       

        for (var i = 0; i < friendList.length; i++) {


            for (var x = 0; x < friendList[i].answers[x]; x++) {
                
                totalDiff += Math.abs(parseInt(surveyAnswers[x]) - parseInt(friendList[i].answers[x]));

                if (totalDiff <= bestMatch.friendDiff) {

                    bestMatch.name = friendList[i].name;
                    bestMatch.photoLink = friendList[i].photoLink;
                    bestMatch.friendDiff = totalDiff;
                } 
            }
        }

        friendList.push(surveyInput);


        res.json(bestMatch);
         console.log("here is the match: "+bestMatch.name);
    });

};