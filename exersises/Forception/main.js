
function forception(people, alphabet) {
    var newArray = []
  for (let i = 0; i < people.length; i++) {
     newArray.push(people[i] + ": " )
        for (let j = 0; j < alphabet.length; j++) {
            newArray.push(alphabet[j].toUpperCase())
    }
  }
  return newArray
}
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(forception(people, alphabet))