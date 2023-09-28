const numbers = [5, 12, 3, 9, 1];
const target = 8;


function findSumOfTwo(number, target) {

    const newMap =  new Map()
    

    for ( i= 0; i<=numbers.length; i++){
        const componetnt  = target - numbers[i]
        if (newMap.has(componetnt)){
            return [componetnt, numbers[i]]
        }
        newMap.set(numbers[i],i)
            }
            return []
 }
   
 


console.log(findSumOfTwo(numbers, target)); // Output: [2, 7]


//Challenge 2: Count Vowels

const vowels= ["a", "e", "i", "o", "u"]
const input = 'Counting Vowels';

function countVowels () {

let count = 0
let map = new Map()
for (i=0; i< input.length;i++){
    let char = input[i].toLowerCase();
    for (j=0; j< vowels.length;j++){
        if(char==vowels[j])
        count++
    }
} return count


}



console.log(countVowels(input)); // Output: 3