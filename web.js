var express = require("express");
var app = express();
app.use(express.logger());

file = fopen(getScriptPath("index.html"), o);
content = fread(file, flength(file));
fclose(file);

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
