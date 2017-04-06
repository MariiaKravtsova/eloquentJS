'use strict';


class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt'
    }

    // not enumerable
    speak () {
        console.log(this.voice );
    }
} 

class Cat extends Animal {
    constructor(name, color) {
        super('Meaw');
        this.name = name;
        this.color = color;    
    }
}

var pumpkin = new Cat('Pumpkin', 'orange');
pumpkin.speak();