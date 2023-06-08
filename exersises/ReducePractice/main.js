//1

function total(arr) {
    const final = arr.reduce((sum, num) => sum+ num, 0)

   return final
}

console.log(total([1,2,3])); // 6

//2
function stringConcat(arr) {
    const final1 = arr.reduce((final1, num) => final1+String(num) )
    return final1
}
    
 
 console.log(stringConcat([1,2,3])); // "123"
 
 //3

 function totalVotes(arr) {
    const final = arr.reduce((count,num) =>  {
        if (num.voted===true){
            count+=1;
        }
        return count
    },0)
    return final
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7


 //4


 function shoppingSpree(arr) {
   const total = arr.reduce((cost,num) => cost + num.price, 0 )
   return total
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

//5

function flatten(arr) {
   
    return arr.reduce((final, num) => final.concat(num),[])
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 //6

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    const voterObj = arr.reduce((final,voter) => {
      if (voter.age>=18 && voter.age<=25){
        final.numYoungVotes +=voter.voted ? 1 : 0;
        final.numYoungPeople++
      }else if (voter.age>25 && voter.age<=35){
        final.numMidVotes += voter.voted ? 1:0;
        final.numMidPeople++
      }else{
        final.numOldVotes += voter.voted ? 1 : 0;
        final.numOldPeople++
      }
      return final
    },{numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})
  return voterObj
}
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
//7

const username = "ifedorov1402";
const url = `https://api.github.com/users/${username}/repos`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const watchersCount = data.reduce((totalWatchers, repo) => totalWatchers + repo.watchers, 0);
    console.log(`Total watchers across all repositories: ${watchersCount}`);
  })
  .catch((error) => {
    console.log("Error occurred while fetching repository data:", error);
  });
 
