const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let point = 0
let myLife = Math.floor(Math.random()*3)+1;
console.log("Your HP:  "+ myLife)
while (myLife > 0 ){
    let answer = readline.question("Enter - [w] to walk ? " + name+"   :  ");
        if (answer === "w"){
            meetAnEnemy = Math.floor(Math.random()*4);
            if(meetAnEnemy === 0){
                whatAnEnemy = Math.floor(Math.random()*3)
                if (whatAnEnemy === 0){
                    let enemyLife = Math.floor(Math.random()*3)+1
                    answer = readline.question("Omg its dangerouse animal - Biden 0_0   , he may attack you with demensia ! Do you wanna run ot fight ???  (r/f) ");
                    while (answer !== "r" && answer !== "f") {
                        console.log("Please enter [r] or [f] to continue ! Idiot")
                        answer = readline.question("Omg its dangerouse animal - Biden 0_0   , he may attack you with demensia ! Do you wanna run ot fight ???  (r/f) ");
                    }
                    if (answer==="r"){
                        chanceToescape = Math.floor(Math.random()*1)
                        console.log("chance:  "+chanceToescape)
                        if(chanceToescape === 0){
                            myLife-=Math.floor(Math.random()*3)+1
                            console.log("your life after attack :" + myLife)
                            if (myLife<=0){
                                console.log("you are got dementia and dead")
                                break
                            }
                        }else{
                            continue
                        }
                    } else if (answer ==="f"){
                        while ( enemyLife > 0 && myLife > 0 ){
                            enemyLife -= Math.floor(Math.random()*3)+1
                            console.log("Enymy life became " +enemyLife +"  after your attack")
                            if (enemyLife<=0){
                                point+=1
                                console.log( "You defited Biden you will not get dementia !!!! and you got pont! ")
                                console.log("My points: "+ point)
                                continue
                            }else{
                                myLife-=Math.floor(Math.random()*3)+1
                                console.log("your life after attack :" + myLife)
                                if (myLife<=0)
                                {
                                    console.log("you are got dementia and dead")
                                    break
                                }
                            }
                        }
                    } else { 
                         console.log("Please enter [r] or [f] to continue ! Idiot")
                            continue
                        }
                } else if (whatAnEnemy === 1){
                    let enemyLife = Math.floor(Math.random()*3)+1
                    answer = readline.question("Omg its dangerouse animal  Harris +_+    ,she may attack you with her laugh ! Do you wanna run ot fight ??? (r/f) ");
                    while (answer !== "r" && answer !== "f") {
                        console.log("Please enter [r] or [f] to continue ! Idiot")
                        answer = readline.question("Omg its dangerouse animal  Harris +_+    ,she may attack you with her laugh ! Do you wanna run ot fight ??? (r/f) ");
                    }
                    if (answer==="r"){
                        chanceToescape = Math.floor(Math.random()*1)
                        console.log("chance:  "+chanceToescape)
                        if(chanceToescape === 0){
                            myLife-=Math.floor(Math.random()*3)+1
                            console.log("your life after attack :" + myLife)
                            if (myLife<=0){
                                console.log("Oykaayyyy Ha Ha you dead")
                                break
                            }
                        }else{
                            continue
                        }
                    } else if (answer ==="f"){
                        while (enemyLife > 0 && myLife > 0){
                            enemyLife-=Math.floor(Math.random()*3)+1
                            console.log("Enymy life became " +enemyLife +"  after your attack")
                            if (enemyLife<=0){
                                point+=1
                                console.log( "You defited Harris you will became VP! !!!! and you got pont! ")
                                console.log("My points: "+ point)
                                continue
                            }else{
                                myLife-=Math.floor(Math.random()*3)+1
                                console.log("your life after attack :" + myLife)
                                if (myLife<=0){
                                    console.log("Oykaayyyy Ha Ha you dead")
                                    break
                                }
                            }
                        }
                    } else{ 
                        console.log("Please enter [r] or [f] to continue ! Idiot")
                        continue
                    }
                } else {
                    let enemyLife = Math.floor(Math.random()*3)+1
                    answer = readline.question("Omg its dangerouse animal  Nancy P 0_0    , she may attack you with her stock obsession  ! Do you wanna run ot fight ???  (r/f)");
                    while (answer !== "r" && answer !== "f") {
                        console.log("Please enter [r] or [f] to continue ! Idiot")
                        answer = readline.question("Omg its dangerouse animal  Nancy P 0_0    , she may attack you with her stock obsession  ! Do you wanna run ot fight ???  (r/f)")
                    }
                    if (answer==="r"){
                        chanceToescape = Math.floor(Math.random()*1)
                        console.log("chance to escape:  "+chanceToescape)
                        if(chanceToescape === 0){
                            myLife-=Math.floor(Math.random()*3)+1
                            console.log("your life after attack :" + myLife)
                            if (myLife<=0){
                                console.log("you are got dementia and dead")
                                break
                            }
                        }else{
                            continue
                        }
                    } else if (answer ==="f"){
                        while (enemyLife>0){
                            enemyLife-=Math.floor(Math.random()*3)+1
                            console.log("Enymy life became " +enemyLife +"  after your attack")
                            if (enemyLife<=0){
                                point+=1
                                console.log( "You defited Pelosi you getting all her stocks !!!! and you got pont! ")
                                console.log("My points: "+ point)
                                continue
                            }else{
                                myLife-=Math.floor(Math.random()*3)+1
                                console.log("your life after attack :" + myLife)
                                if (myLife<=0){
                                    console.log("You dead ! I will take all your stocks ")
                                    break
                                }
                            }
                        }
                    } else{ 
                         console.log("Please enter [r] or [f] to continue ! Idiot")
                         continue
                        }
                }
            
            } else{
                console.log("you can enter w again")
            }

        }else{
            console.log("Please enter [w] to start walking ! Idiot")
        }




    //     count =+ 1
    //  }else if (answer === "3"){
    //     personAlive = false
    //     console.log (" YOU ARE DEAD")
    //  }else if (answer=== "2"){
    //     door_open = true
    //     console.log = ("YOU FREE")
    //  }

     

}