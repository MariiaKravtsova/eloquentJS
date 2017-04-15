var Task = require('./task');
var repo = require('./taskRepository');

var task1 = new Task(repo.get(1));
var task2 = new Task({name: 'drink water'});

task1.save();
task2.save();
task2.complete();