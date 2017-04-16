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