#!/bin/env node
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var environment = process.argv[2];

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

app.listen(server_port, server_ip_address, function(){
  console.log('Listening on ' + server_ip_address + ', server_port ' + server_port);
});
