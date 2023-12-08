const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const movies =[
    {title: "Die hard", genre: "action", _id: uuidv4()},
    {title: "Star Wars IV", genre: "fantasy", _id: uuidv4()},
    {title: "Lion King", genre: "fantasy", _id: uuidv4()},
    {title: "Friday the 13th", genre: "horror", _id: uuidv4()}
]

movieRouter.get("/", (req, res) =>{
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId", (req, res) =>{
    const movieId = req.params.movieId
    const foundMovie = movie.find( movie => movie._id === movieId)
    res.send(foundMovie)
})

movieRouter.post("/", (req, res) =>{
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)

    res.send(newMovie)
})


// delete 

movieRouter.delete("/:movieId", (req, res)=>{
    const movieId = req.params.movieId
    const movieIndex =movies.findIndex( movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Succsesfully deleted")
})

//put

movieRouter.put( "/:movieId", (req, res) =>{
    const movieId = req.params.movieId
    const movieIndex =movies.findIndex( movie => movie._id === movieId)

    // using method Object.assign
    const updatedMovie = Object.assign(movies[movieIndex],req.body)
    res.send(updatedMovie)

})

module.exports = movieRouter