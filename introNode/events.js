var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message){
    console.log(message);
});

myEmitter.emit('someEvent', 'the event was emitted')

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var jake = new Person('jake');
var jerry = new Person('jerry');
var people = [james, jake, jerry];

people.forEach(function(person){
  person.on('speak', function(message) {
    console.log(person.name + ' said ' + message);
  })
});

james.emit('speak', 'hey dudes');
