var express = require("express");
var app = express();
app.use(express.logger());

content = '<html><head><title>Shilpa Balaji</title><link rel=stylesheet href="css/style.css" type="text/css"></head><body><div class="boxed"><h1 class="name">Shilpa Balaji</h1> <hr><hr><div class="main_text"><br>email me: <a href="mailto:shilpa@shilpabalaji.com">shilpa@shilpabalaji.com</a><br></div></div></body><html>'

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
