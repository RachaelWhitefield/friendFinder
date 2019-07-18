var path = require("path");
var responses = require("../data/responses.js");
var friends = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.send(friends);
    })

    app.get("api/responses", function(req, res) {
        res.send(responses);
    })

    app.post("/api/response", function(req, res) {
        responses.push(req.body);
        res.send(true);
    })
    
}