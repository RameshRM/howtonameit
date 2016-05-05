'use strict';
var nodemailer = require('nodemailer');
var FS = require('fs');

var Path = require('path');
var Handlebars = require('handlebars');
var composer = require('./compose');
var _template = FS.readFileSync(Path.join(__dirname, './template.hbs')).toString();
var _compiled = Handlebars.compile(_template);
var smtpCredentials = {
  user: process.env.SMTP_AUTH,
  pass: process.env.SMTP_PASS
};

module.exports = function (data) {
  return _compiled(data);
};
module.exports = function (req, res) {
  res.send(_compiled({}));
};


module.exports.mailer = {
  send: function (data, callback) {
    transporter.sendMail({
      from: 'rmrmail@gmail.com',
      to: data.to,
      subject: 'Awesome Coffee !!! @ Palo Alto Cafe',
      text: data.message
    }, function (err, result) {
      callback(err, result);
    });
  }
};

var transporter = nodemailer.createTransport({
  host: 'email-smtp.us-west-2.amazonaws.com',
  port: 465,
  secure: true,
  auth: smtpCredentials
});
