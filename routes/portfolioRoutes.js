'use strict';

var express = require('express');
var http = require('http');
var https = require('https');
var portfolioRouter = express.Router();

var behanceApiKey = process.env.BEHANCE_API_KEY;
var behanceApiEndpoint = 'http://www.behance.net/v2/';

var githubOptions = {
    host: 'api.github.com',
    path: '/users/holgadosebastian/repos',
    method: 'GET',
    headers: {
        'User-Agent': 'holgadosebastian'
    }
};

portfolioRouter
  .get( '/behance/projects', function(req, res) {
    return http.get(behanceApiEndpoint + 'users/sebastianholgado/projects?api_key=' + behanceApiKey, function ( response ) {
        var bodyChunks = [];

        response.on('data', function ( chunk ) {
          bodyChunks.push(chunk);
        });

        response.on('end', function(){
          var body = Buffer.concat(bodyChunks);

          res.write(body);
          res.end();
        });

      })
      .on('error', function(e){
        console.log('Got error: ' + e.message);
      })
      .end();
  });

portfolioRouter
  .get( '/behance/project/:id', function(req, res) {
    var projectId = req.params.id;

    return http.get(behanceApiEndpoint + 'projects/' + projectId + '?api_key=' + behanceApiKey, function ( response ) {
        var bodyChunks = [];

        response.on('data', function ( chunk ) {
          bodyChunks.push(chunk);
        });

        response.on('end', function(){
          var body = Buffer.concat(bodyChunks);

          res.write(body);
          res.end();
        });

      })
      .on('error', function(e){
        console.log('Got error: ' + e.message);
      })
      .end();
  });

portfolioRouter
  .get( '/github/repositories', function(req, res) {
    return https.get(githubOptions, function ( response ) {
        var bodyChunks = [];

        response.on('data', function ( chunk ) {
          bodyChunks.push(chunk);
        });

        response.on('end', function(){
          var body = Buffer.concat(bodyChunks);

          res.write(body);
          res.end();
        });

      })
      .on('error', function(e){
        console.log('Got error: ' + e.message);
      })
      .end();
  });

module.exports = portfolioRouter;
