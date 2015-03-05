var http = require('http');
var ecstatic = require('ecstatic');
var router = require('routes')();

http.createServer(
  ecstatic({
    root: __dirname + '/public'
  })
).listen(5000);

console.log('Listening on : 5000');
