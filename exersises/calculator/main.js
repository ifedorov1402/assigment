function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
var readlineSync = require('readline-sync');
let  num1 = parseInt(readlineSync.question("what is first number?   "))
let num2 = parseInt(readlineSync.question("what is second number?   "))
var operation = readlineSync.question("what is mathematical operation?  ")
while (operation != "add" && operation != "sub" && operation != "mul" && operation != "div"){
    console.log("Please enter: add, sub, mul, div!!!!!")
    operation = readlineSync.question("What is the mathematical operation? (add, sub, mul, or div) ");
}
if (operation =="add"){
    console.log("The result is:  " + add(num1, num2))
} else if(operation =="sub"){
    console.log("The result is:  " + sub(num1, num2))
} else if(operation =="mul"){
    console.log("The result is:  " + mul(num1, num2))
} else if(operation =="div"){
    console.log("The result is:  " + div(num1, num2))
}


