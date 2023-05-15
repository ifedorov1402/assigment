//1

// function max(array){
//     let maxValue = 0
//     for ( let i = 0; i<array.length; i++){
//         if (array[i]>maxValue){
//             maxValue=array[i]
//         }
//     }
//     return maxValue;
// }
// console.log(max([6, 13, 250, 3]))
//2
// function lettersWithStrings(array1,char){
//     let final = []
//     for ( let i = 0; i<array1.length; i++){
//         for (let j = 0; j<array1[i].length;j++)
//             if (array1[i][j]==char){
//                 final.push(array1[i])
//         }
//     }
//     return final
// }
// console.log(lettersWithStrings(["hello!","home", "sweeet!"],"!"))

//3
function isDivisible(num1,num2){
    result = false
    if (num1 % num2 === 0 ){
        result = true;
    } else{
        result = false;
    }
    return result
}
console.log(isDivisible(15, 4)) 