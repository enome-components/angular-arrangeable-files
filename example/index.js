var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../'));
app.use('/fileserver', require('./file-server')(__dirname + '/files'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

http.createServer(app).listen(3001);
