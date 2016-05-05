'use strict';

var messengerCredentials = {
  secret: process.env.MESSENGER_SECRET,
  token: process.env.MESSENGER_TOKEN
};

var twilio = require('twilio')(messengerCredentials.secret, messengerCredentials.token);

module.exports = function (req, res) {
  twilio.sendMessage({
    to: '+16308773409',
    from: '+14082148483',
    body: 'Hi'
  }, function (err, result) {
    res.send({
      err: err,
      result: result
    });
  });

};
