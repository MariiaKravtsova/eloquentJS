var fs = require('fs');

// synchronous method
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

// asynchronous method
// fs.readFile('readMe.txt', 'utf8', function(err, data) {
//   fs.writeFile('writeMe.txt', data);
// });
//
// fs.unlink('readMe.txt');
// fs.unlink('writeMe.txt');

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');
fs.mkdir('stuff', function() {
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});

fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff');
});
