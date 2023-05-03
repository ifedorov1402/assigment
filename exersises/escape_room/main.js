const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let door_open = false
let key = false
let hole = true
let personAlive = true
let count = 0

while (door_open === false && personAlive === true ){
    const answer = readline.question("Where should you go ? " + name+"  . Pick your action: ender 1 , if you want to tray open the door, enter 2 - if you want to find a key, enter 3 - if you want to put your hand in hole   :");
     if (answer ==="1"){
        console.log("THE DOOR IS LOCKED")
        count =+ 1
     }else if (answer === "3"){
        personAlive = false
        console.log (" YOU ARE DEAD")
     }else if (answer=== "2"){
        door_open = true
        console.log = ("YOU FREE")
     }

     

}