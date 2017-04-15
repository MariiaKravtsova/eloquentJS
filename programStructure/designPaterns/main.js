var Task = require('./task');

var task1 = new Task('eat pineapple');
var task2 = new Task('drink water');

task1.save();
task2.save();
task2.complete();