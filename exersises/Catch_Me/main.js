// //1.a
// function sum(x, y){
//   try{
//     if(typeof(x)!="number" || typeof(y)!="number"){
//         throw new Error("Hey I am an error!")
//     }
   
//     }
//  catch(err){
//         console.log(err)

//   }
//   return x + y;
// }
// // console.log(sum(3,"5"))

//1b
// try{
//     var x = 1;
//     var y = 2;
//     sum(x,y)
//     if(x === 1 || x === 2 || y === 1 || y ===2 ){
//         throw new Error("Hey I am an error!")
//     }

// }
// catch(err){
//     console.log(err)
// }

//2.a
var user = { username: "sam", password: "123abc" };

function login(username, password) {
  try {
    if (user.username !== username || user.password !== password) {
      throw new Error("Username or password incorrect");
    }
    console.log("Login successful");
  } catch (err) {
    console.log(err);
  }
}

// login("sami", "123abc");

//2.b

try{
    console.log (" Trying with correct credentioals")
   login("sam", "123abc")

   console.log (" Trying with incocorrect credentioals")
   login("samii", "123abc")
}
catch(err){
    console.log(err)
}