
const express = require("express")
const app = express()
const nameToRequest = require("./routs/middleware.js")
// Middleware ( for every request)
app.use(express.json())  //looks for the request body, and turns iy into 


app.use(nameToRequest)

app.use("/items", (req,res,next ) =>{
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})

app.get("/items", (req,res,next ) =>{
    console.log("GET REQUEST RECEIVED ")
res.send(req.body)
})


    // 1: Port  2: Call back function (CB)
app.listen(9000, () =>{
    console.log ("  The server is runnug ")
})