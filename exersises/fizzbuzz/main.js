let total ={
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      total.fizzbuzz+=1;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      total.fizz+=1
    } else if (i % 5 === 0) {
      console.log("Buzz");
      total.buzz+=1
    } else {
      console.log(i);
    }
  }
  
  for (let prop in total){
    console.log(`${prop}: ${total[prop]}`);

  }
  