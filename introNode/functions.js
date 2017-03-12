// module with require()
var count = require('./count');

console.log(count.counter(['flay', 'blay', 'play']));
console.log(count.adder(4, 9));
console.log(count.pi);

// function expression

function callFunnction(fun) {
  fun();
};

var sayBye = function() {
  console.log('bye');
};

sayBye();

callFunnction(sayBye);
