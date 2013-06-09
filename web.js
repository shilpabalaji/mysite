var express = require("express");
var app = express();
var wwwDir = "/www";
app.use("/", express.static(__dirname + wwwDir));
app.get("/", function(req, res) { res.render(wwwDir + "/index.html");});

var port = process.env.PORT || 8000;
app.listen(port);
console.log("Listening on port " + port);
