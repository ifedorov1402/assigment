var count = 0
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for (let i = 0; i<officeItems.length; i++){
    if(officeItems[i]==="computer"){
        count= count + 1
    }
}
console.log("ammount of the computers:  "+ count)


var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]
for (let j = 0; j<peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[j].age>=18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " OLD ENOUGH to see Mad Max")
    }else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " NOT OLD ENOUGH to see Mad Max")
    }
}



var ar = [2, 3, 2]

var sw = false

for(q = 0; q < ar.length; q++){
    var swtches = ar[q]
    for( w = 0; w < swtches; w++){
        if( sw=== false){
            sw = true
        }else {
            sw = false
        }
    }
}
if (sw===true){
    console.log("THe Light is On")
}else{
    console.log("the light is off")

}
