'use strict';

var app = require('express')();
var bodyParser = require('body-parser');

app.listen(3333, function(err, res){
  console.log(err, res);
});

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(require('meta-router/middleware').match(require.resolve('./routes.json')));
app.use(require('meta-router/middleware').invokeHandler());
