var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('A bug is reived : ');
  console.log(req.params);
  res.send({id: 100, url: "https://www.google.fr", public: false});
});

app.listen(3080, function () {
  console.log('Example app listening on port 3080!');
});
