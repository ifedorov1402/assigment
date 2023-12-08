
const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

// Middleware ( for every request)
app.use(express.json())  //looks for the request body, and turns iy into 

 // 1. Endpoint (mount path)
 //2. CallBack function


//Routes 

app.use("/bounty", require("./routes/bountyRouter.js"))




    // 1: Port  2: Call back function (CB)
app.listen(9000, () =>{
    console.log ("  The server is runnug ")
})