'use strict';
var mailer = require('../../messenger/mailer').mailer;
module.exports = function (req, res) {
  mailer.send(req.body, function (err, result) {
    res.send('Ok');
  });

};
