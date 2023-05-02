var fruit = ['banana', 'apple', 'orange', 'watermelon']
var vegetables = ['carrot', 'tomato','pepper', 'lettuce']
console.log("fruit: ", fruit)
console.log("vegetables: ", vegetables)

//1
vegetables.pop()
//2
fruit.shift()
//3
fruit.indexOf("orange")
//4
fruit.push(3)
//5
var vegLength = vegetables.length
//6
vegetables.push(2)
//7
var food = fruit.concat(vegetables)
//8
food.splice(4,2)
//9
food.reverse()
//10
var foodString  = food.join(",")

console.log(foodString)