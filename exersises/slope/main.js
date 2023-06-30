//1
const collectAnimals = (...animal) => console.log(animal)



collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]
//2
const combineFruit = (fruit, sweets, vegetables)=>{
    return {
        fruit,
        sweets,
        vegetables
    };
}

const food = combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
console.log(food)

//3
const parseSentence = ({location = "Hawai", duration="month"}) =>{
    console.log( `We're going to have a good time in ${location} for ${duration}`)
}
  
  const try1 = parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  })
  //4
  function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}
//5 
// const returnFirst = (items) => {
//     const [firstItem] = items;
//     return firstItem;
//   };

//6
//
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) { 
    const [firstFav,secondFav, thirdFav] = arr;
    return `My top three favorite activities are  ${firstFav} , ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))

//7

const combineAnimals = (...arr) => [].concat(...arr)


const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//8

const product = (...numbers)=> numbers.reduce((acc, number)=> acc*number,1)
console.log(product(2,3))


//9
const unshit = (array, ...number)=>[...number,...array]

//10

const populatePeople = (...names) => names.map((name) => {
    const [firstName, lastName] = name.split(" ");
    return { firstName, lastName };
  });
  
 console.log(populatePeople("Frank Peterson", "Suzy Degual", "Liza Jones"))
  