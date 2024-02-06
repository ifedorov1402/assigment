
const express = require("express")
const app = express()
const mongoose = require('mongoose');

// Middleware ( for every request)
app.use(express.json())  //looks for the request body, and turns iy into 


mongoose.connect('mongodb+srv://fedorovivan:More140291@cluster0.8ajlsah.mongodb.net/methodsdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to the DB'))
.catch(err => console.error('Could not connect to the DB:', err));



app.use("/books", require("./routes/bookRouter.js"))
app.use("/authors", require("./routes/authorRouter.js"))

//Error handler

app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})

})

    // 1: Port  2: Call back function (CB)
app.listen(9000, () =>{
    console.log ("  The server is runnug ")
})

