'use strict';

var express = require('express');
var nodemailer = require('nodemailer');
var mailerRouter = express.Router();

var mailUser = process.env.MAIL_USER;
var mailUserPassword = process.env.MAIL_USER_PASSWORD;

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: mailUser,
        pass: mailUserPassword
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

mailerRouter.post('/contact', function (req, res) {
  var mailOptions = {
    from: req.body.name + ' <' + req.body.email + '>', // sender address
    to: mailUser, // list of receivers
    subject: 'SH Portfolio contact mail', // Subject line
    html: '<div>Name: ' + req.body.name + '</div><div>Email: ' + req.body.email + '</div><div>Find on: ' + req.body.find + '</div><div>Message: </div><div>' + req.body.message + '</div>'
  };

  transporter.sendMail(mailOptions, function(error){
    if ( error ) {
      console.log( error );
      res.status(500).send('There was an error trying to send the email ' + error );
    } else {
      console.log( 'Mail sent succesfully' );
      res.status(200).send('ok');
    }
  });
});

module.exports = mailerRouter;
