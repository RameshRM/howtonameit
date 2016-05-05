'use strict';

var FS = require('fs');
var Path = require('path');
var Handlebars = require('handlebars');

var _template = FS.readFileSync(Path.join(__dirname, './template/index.hbs')).toString();
var _compiled = Handlebars.compile(_template);

module.exports = function (data) {
  return _compiled(data);
};

module.exports.compose = function(){

};
module.exports = function (req, res) {
  res.send(_compiled({}));
};
