//Link Dependencies
var path = require("path");

module.exports = function(app) {
    //HTML get requests
    // the path /survey should load survey.html, anything else should redirect to home
    app.get("/survey", function(requests, results) {
        results.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("*", function (requests, results) {
        results.sendFile(path.join(__dirname, "/../public/home.html"))
    });
}