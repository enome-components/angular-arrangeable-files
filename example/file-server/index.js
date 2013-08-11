module.exports = function (dir) {

  var express = require('express');
  var app = express();
  app.use(express.bodyParser());

  require('./directories')(app, dir);
  require('./files')(app, dir);

  return app;

};
