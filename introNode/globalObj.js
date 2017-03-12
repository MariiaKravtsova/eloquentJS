console.log(__dirname);
console.log(__filename);

// setTimeout(function(){
//   console.log('3 second have passed');
// }, 3000);

var time = 0;
var timer = setInterval(function(){
  time += 2;
  console.log(time + ' second have passed');
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);
