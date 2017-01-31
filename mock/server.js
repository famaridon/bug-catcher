var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/',bodyParser.json({limit: '50mb'}), function (req, res) {
  console.log('A bug is reived : ');
  console.dir(req.body);

  res.send({id: 100, url: "https://www.google.fr", public: false});
});

app.listen(3080, function () {
  console.log('Example app listening on port 3080!');
});
