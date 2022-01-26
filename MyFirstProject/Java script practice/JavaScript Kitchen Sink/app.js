// Logs how many total states there are in the United States
const numberOfStatesInTheUnitedStates = 50;
console.log(numberOfStatesInTheUnitedStates)
// Adds 5 and 4
var sum = 5 + 4;
console.log(sum)
// Creates a function that when called logs Hello! to the console
function sayHello() {
    alert('Hello!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21)
        alert("Sorry " + name + ", you aren't old enough to view this page!")
}

checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)
let favoriteVegetables = ['Cucumber', 'potato', 'squash']

for (var i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i])
}

let pet = {
    name: 'Cruiser',
    breed: 'Mutt',
}

console.log(pet.name)
console.log(pet.breed)

let people = [
    {
        name: 'Tommy',
        age: 23
    },
    {
        name: 'John',
        age: 23
    },
    {
        name: 'Lily',
        age: 21
    },
    {
        name: 'Jill',
        age: 21
    },
    {
        name: 'Jack',
        age: 17
    }
]
for (let index = 0; index < people.length; index++) {
    checkAge(people[index].name, people[index].age)
}