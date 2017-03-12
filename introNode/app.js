var http = require('http');
var fs = require('fs');


/*
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received:');
  console.log(chunk);
  myWriteStream.write(chunk);
});
*/

var server = http.createServer(function(req, res) {
  console.log('request made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('I am listening on port 3000');
