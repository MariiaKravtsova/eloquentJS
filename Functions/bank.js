// account has $100 balance at start.
var account = { balance: 100 };

account.schedule = function () {

 /* Schedule a $100 credit after 1/2 second.
    Use arrow function for timer callback.*/
 setTimeout( () => {      
   // Credit $100 
   this.balance += 100; // <-- 'this' refers to 'account' here
   console.log("arrow func balance ", this.balance);
   /* Schedule a $200 debit after 
      1/2 second. Use regular function
      for timer callback.*/
   setTimeout( function() { 
    console.log("reg func balance ", this.balance);
    // Debit $200
    this.balance -= 50; // <- 'this' refers to the global object here
    console.log("reg func balance ", this.balance);
   }, 500 );            

 }, 500 );  

};

account.schedule();
console.log("balance global: ", account.balance);

setTimeout( function() { 
    console.log("balance after timeout ", account.balance);           
}, 2000 );

account.withdraw = () => {
    let amount = 50;
    account.balance -= amount;
    console.log(account.balance);
};

account.withdraw();

console.log(account.balance);