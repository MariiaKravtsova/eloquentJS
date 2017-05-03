// Functions are values
let triple = function triple(x) {
    return x * 3;
}

let waffle = triple;
console.log('I will eat ' + waffle(30) + ' waffles.');

const animals = [
    {name: 'Fluffykins', species: 'rabbit', age: 5},
    {name: 'Maverick', species: 'dog', age: 5},
    {name: 'Tobby', species: 'dog', age: 5},
    {name: 'Tom', species: 'fish', age: 5},
    {name: 'Pat', species: 'fish', age: 5},
];

let isDog = function(animal) {
    return animal.species === 'dog';
}

let dogs = animals.filter(isDog);
console.log('The dog names are ' + dogs[0].name + ' and ' + dogs[1].name);

let ages = animals.reduce((sum, animal) => sum + animal.age, 0)
console.log('Animals are ' + ages + ' years old.');

const foo = 'bar';

function bar() {
    let foo = 'baz';
    console.log(foo);
    function baz(foo) {
        console.log(foo);
        foo = 'bam';
        console.log(foo);
        bam = 'yay';    
        console.log(bam);
    }
    baz();
}
// console.log(bam);
console.log(foo);

bar();
console.log(foo);

const player = {
    score: 1,
    name: 'Maya'
}
// with mutation
player.name = 'dogs';
console.log(player);
// witout mutation
const newPlayer = Object.assign({}, player, {name: 'Maya'});
console.log(newPlayer);