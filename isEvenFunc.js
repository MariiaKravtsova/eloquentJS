// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

var isEven = function(num) {
 if (num == 0) {
 	return true;
 } else if (num == 1) {
   return false;
 } else if (num < 0) {
   return isEven(-num);
 } else {
   return isEven(num-2);
 }
}
