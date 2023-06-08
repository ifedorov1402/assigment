var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
 const finalAge = peopleArray.filter((arr) => arr.age>18)
 const sortFinal = finalAge.sort((a,b)   => a.lastName.localeCompare(b.lastName) )
 const final = sortFinal.reduce((result,num) =>{
 const listItem = "<li>" + num.firstName + " " +num.lastName + " is " + num.age + "</li>"
 result.push(listItem)
 return result
},[])
    return final
}
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 
 //Create another array of 
 //one or more individuals and add it to the original array.
 var newPerson ={
    
    firstName: "Ivan",
    lastName: "Fedy",
    age: 31
    }
    peopleArray.push(newPerson);
      
    console.log(peopleArray);

//Create a function that filters out all people who's last
// names end with "y" or "a" and save those people in another array.

function filterYorA (arr){
    const newAr = arr.filter((name) => name.lastName.endsWith("y") ||name.lastName.endsWith("a") )
    return newAr
}
console.log(filterYorA (peopleArray))

//Remove the second individual from the array.

peopleArray.splice(1,1)
console.log(peopleArray)

//Return the array in reverse order.

peopleArray.reverse();

console.log(peopleArray)