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

/*
var server = http.createServer(function(req, res) {
  console.log('request made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Donatelo',
    job: 'ninja',
    age: 12
  };
  res.end(JSON.stringify(myObj))
});
*/

var server = http.createServer(function(req, res) {
  console.log('request made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);

  } else if (req.url === '/contact') {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);

  } else if (req.url === '/api/ninjas') {

    var ninjas = [{name: 'Donatelo', age: 12}, {name: 'Michelangelo', age: 14}];
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(ninjas))

  } else {

    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
    
  }
});

server.listen(3000, '127.0.0.1');
console.log('I am listening on port 3000');
