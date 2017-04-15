'use strict'

class Task { 
    contructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        console.log('completing task ' + this.name);
        this.completed = true;
    }

    save() {
        console.log('saving Task: ' + this.name);
    }
}

var task1 = new Task('eat pineapple');
var task2 = new Task('drink water');

task1.save();
task2.save();
task2.complete();