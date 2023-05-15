const readline = require("readline-sync");
const name = readline.question("Hello weird person! What is your name? ");
let point = 0
let myLife = Math.floor(Math.random()*3)+1;
console.log("Your HP:  "+ myLife)


while (myLife > 0 ){
    do{
        answer = readline.question( "Enter - [w] to walk ? " + name+"   :  " ) ;
        if ( answer === "Print" || answer === "p" ){
            printAll();
        }
        if (answer !== "w" && (answer !== "Print" || answer !== "p" )) {
            console.log( "I said press <w> , stupid ideot !" )
        }
    } while (answer !== "w");
    let chanceToMeet = Math.floor( Math.random()*3 )
    console.log( "Chance to meet enemy is:  "  + chanceToMeet )
    if ( chanceToMeet === 0 ){
        meetTheEnemy();
        let answer1;
        do {
            answer1 = readline.question( "Do you wanna run ot fight ???  (r/f) ") ;
            if ( answer1 === "Print" || answer1 === "p" ){
                printAll();
            }
            if ( answer1 !== "r" && answer1 !== "f" && answer1 !== "Print" && answer1 !== "p" ){
            console.log ( " I said press <f> or <r> ! , stupid ideot ! " ) 
        }
        } while ( answer1 !== "r" && answer1 !== "f" );
        if ( answer1 === "r" ){
            runFromEnemy()
        } else if ( answer1 === "f" ) {
            fightTheEnemy()
        } 
            
    } else {
        continue;
    }
}


function gerRandomEnemy (){
    const enemy =[ "Biden" , "Harris" , "Pelosy"]
    const randomEnemy = enemy[ Math.floor ( Math.random()*3 )]
        return randomEnemy
}
function meetTheEnemy (){
    let enemy = gerRandomEnemy()

    if ( enemy === "Biden" ){
        console.log( "Omg its dangerouse animal - Biden 0_0   , he may attack you with demensia ! Do you wanna run ot fight ??? (r/f)" )   
    } else if ( enemy === "Harris" ){
        console.log( "Omg its dangerouse animal  Pokemon +_+    , It may hit you with electrisity ! Do you wanna run ot fight ??? (r/f) " )
    } else {
        console.log( "Omg its dangerouse animal  Vampire +_+    , It may suck your blood ! Do you wanna run ot fight ??? (r/f) " )
    }
}
function runFromEnemy() {
    let enemyLife = Math.floor( Math.random() * 3) + 1;
    const chanceToEscape = Math.floor( Math.random() * 2 );
    console.log( "Chance to escape: " + chanceToEscape) ;
    if ( chanceToEscape === 0 ) {
      while ( myLife > 0 && enemyLife > 0 ) {
        console.log( "Enemy HP :  " + enemyLife )
        myLife -= Math.floor( Math.random() * 3 ) + 1;
        console.log( "Your life after attack: " + myLife );
  
        if ( myLife <= 0 ) {
          console.log( "Oh noooo you dead !" );
          break;
        }
        enemyLife -= Math.floor(Math.random() * 3) + 1;
        console.log( "Enemy life after attack: " + enemyLife );
        if ( enemyLife <= 0 ) {
          point += 1;
          console.log( "You killed the enemy! Here is +1 point!" );
          break;
        }
      }
    }
  }

function fightTheEnemy (){
    let enemyLife = Math.floor( Math.random() * 3 ) + 1;
    while ( myLife > 0 && enemyLife > 0 ) {
        console.log( "Enemy HP :  " + enemyLife )
        enemyLife -= Math.floor( Math.random() * 3 ) + 1;
        console.log ("Enemy life after attack: " + enemyLife );
        if ( enemyLife <= 0 ) {
            point += 1;
            console.log( "You killed the enemy! Here is +1 point!" );
            continue;
     }
        myLife -= Math.floor( Math.random() * 3 ) + 1;
        console.log( "Your life after attack: " + myLife );
        if ( myLife <= 0 ) {
          console.log( "You got dementia and died." );
          break;
        }
  
       
      }
}
function printAll (){
    console.log ( "Your name:  " + name );
    console.log ( "Your HP:  " + myLife );
    console.log ( " You have " + point + " special objects !" )
}




