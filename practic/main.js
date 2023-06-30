// const MathLibrary = {
//   calculateProduct(...rest) {
//     console.log('Please use the multiply method instead');
//     return this.multiply(...rest);
//   },
//   multiply(a, b) {
//     return a * b;
//    }
// };
// console.log(MathLibrary)
// const  unshift = (...array) => [a,b,c,s,e].concat(array)

const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]


const filterForFriendly = (arr) => arr.filter((person) => person.friendly)

console.log(filterForFriendly(people))


//3 Rewrite Map() using arrow function

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables =(arr) => arr.map((carrot) => ({type: "carrot", name: carrot} ))

console.log(mapVegetables(carrots))

//4
//Re-write the following functions to be arrow functions:

const doMathSum =(a, b)=> a+b

var produceProduct = (a, b)=> a*b

console.log(doMathSum(2,2))
console.log(produceProduct(2,6))

//5
//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
}
printString("ivan","fedorov", 32)

//5
//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
const filterForDogs= (arr) => arr.filter((animal)=>animal.type==="dog")
    
 console.log(filterForDogs(animals))

 //Template Literals

 const printString1 = (firstName = "Jane", lastName = "Doe", location = "Hawaii") => {
    console.log(`Hi ${firstName} ${lastName}, \n Welcome to ${location} \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`);
}
printString1("ivan","fedorov", "Hawaii")

