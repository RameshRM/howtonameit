'use strict';
var FS = require('fs');
var Path = require('path');
var Handlebars = require('handlebars');

var _template = FS.readFileSync(Path.join(__dirname,'./template.html')).toString();
var _compiled = Handlebars.compile(_template);

module.exports = function (data) {
  return _compiled(data);
};
