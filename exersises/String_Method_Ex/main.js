//1

function Capitalize (str){
    var capilizedAndLowercase = str.toUpperCase() + str.toLowerCase()
    return capilizedAndLowercase
}
var str = "Hello"
console.log(Capitalize(str))
//2
function FindMiddleIndex (string){
    return Math.floor(string.length/2)
}
console.log(FindMiddleIndex("Hello World"))
//3
function returFirstHalf(string){
    
    return string.slice(0,FindMiddleIndex(string))
}
console.log(returFirstHalf("Hello"))
//4
function capilizedAndLowercase1(string){
    var firstHalf = string.slice(0,FindMiddleIndex(string)).toUpperCase()
    var SeconftHalf = string.slice(FindMiddleIndex(string)).toLowerCase()
    return firstHalf + SeconftHalf
}
console.log(capilizedAndLowercase1("Hello"))
//5
function SplitCapitalize(string){
    var newArr = []
    var finalAtt = []
    newArr = string.split(" ")
    for (let i = 0; i< newArr.length;i++){
        finalAtt.push(newArr[i][0].toUpperCase()+newArr[i].slice(1))
    }
    return finalAtt.join(" ")

}
console.log(SplitCapitalize("friends! practice practice practice!"))