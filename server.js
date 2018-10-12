#!/bin/env node
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var server_port = process.env.PORT || 5000;

var environment = process.argv[2] || 'prod';

if ( environment === 'dev' ) {
  app
    .use(express.static(__dirname + '/.tmp'))
    .use(express.static(__dirname + '/app'))
    .use(express.static(__dirname + '/'));
} else {
  app.use(express.static(__dirname + '/dist'));
}

app.use( bodyParser.json() );

// Routes
var portfolioRoutes = require('./routes/portfolioRoutes');
var mailerRoutes = require('./routes/mailerRoutes');

app.use('/portfolio', portfolioRoutes);
app.use('/mailer', mailerRoutes);

app.listen(server_port, function(){
  console.log('Listening on server_port ' + server_port);
});
