
const express = require("express")
const app = express()
const morgan = require("morgan")
const {v4: uuidv4} = require('uuid')

// Middleware ( for every request)
app.use(express.json())  //looks for the request body, and turns iy into 
app.use(morgan("dev"))  //Logs requests to the console
 // 1. Endpoint (mount path)
 //2. CallBack function
 //Fake Data



//Routes 
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvShows", require("./routes/tvShowRouter.js"))


    // 1: Port  2: Call back function (CB)
app.listen(9000, () =>{
    console.log ("  The server is runnug ")
})