function culTotal(){
let num1 = parseInt(document.forms["myForm"].number1.value)
let num2 = parseInt(document.forms["myForm"].number2.value)
let num3 = parseInt(document.forms["myForm"].number3.value)


let price1 = 5;
let price2 = 7;
let price3 = 11;

let total = (price1*num1)+(price2*num2)+(price3*num3)
document.getElementById("total").innerHTML = "<h1>Total due: " + total + " Coins</h1>";
}