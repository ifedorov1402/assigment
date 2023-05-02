//Preliminaries
//1
for (let i = 0;  i <10; i++){
    console.log(i)
}
//2

console.log("-----------------")
for (let j = 9;  j >= 0; j--){
    console.log(j)
}
//3
console.log("________________")
const fruit = ["banana", "orange", "apple", "kiwi"]
for (let k = 0;  k < fruit.length ; k++){
    console.log(fruit[k])
}

// Bronze Medal
//1
var array1 = []
for (let q = 0;  q <10; q++){
    array1 [q]= q
}
//2
console.log("________________")
 for (let w = 0;  w <+100; w++){
    if ( w %2 == 0){
        console.log(w)

    }
}
//3
console.log("________________")
const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var everyOther =[]

for (let t = 0;  t < fruit1.length ; t=t+2){
        everyOther.push(fruit1[t]);
}
console.log(everyOther)

// Silver Medal

//1

const peopleArray = [
    {
        name: "Harrison Ford",
        occupation: " Actor"
    },
    {
        name: "Jastin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "politician"
    
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

//1

for (let y = 0; y<peopleArray.length; y++){
    console.log(peopleArray[y].name)
}

//2
var names = []
var occupation = []
for (let x = 0; x < peopleArray.length; x++){
    names.push(peopleArray[x].name)
    occupation.push(peopleArray[x].occupation)
    
}
console.log("names: "+names + "  occupation: " + occupation)

//3
console.log("____________________")
var names1 = []
var occupation1 = []
for (let a = 0; a < peopleArray.length; a++){
    if(a % 2 ===0 ){
        names1.push(peopleArray[a].name)
    }else{
        occupation1.push(peopleArray[a].occupation)
    }
}
console.log("names: "+names1 + "  occupation: " + occupation1)

