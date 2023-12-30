const express = require("express")
const movieRouter = express.Router()
const Movie = require('../models/movie.js')
const movie = require("../models/movie.js")
// const {v4: uuidv4} = require('uuid')


// const movies =[
//     {title: "Die hard", genre: "action", _id: uuidv4()},
//     {title: "Star Wars IV", genre: "fantasy", _id: uuidv4()},
//     {title: "Lion King", genre: "fantasy", _id: uuidv4()},
//     {title: "Friday the 13th", genre: "horror", _id: uuidv4()}
// ]



movieRouter.get("/", (req, res, next) =>{
    // res.status(200)
    // res.send(movies)
    Movie.find((err, movies)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })

})

// Get One
movieRouter.get("/:movieId", (req, res, next) =>{
    const movieId = req.params.movieId
    const foundMovie = movies.find( movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`Items with ${movieId}ID was not found`)
        res.status(500)
       return next(error)
    }
    res.status(200).send(foundMovie)
})

//get by genra
movieRouter.get("/search/genre", (req, res, next) =>{
    // const genre = req.query.genre
    // if(!genre){
    //     const error = new Error("you must provide genre")
    //     res.status(500)
    //    return next(error)
    // }
    // const filterMovies = movies.filter( movie => movie.genre === genre)
    // res.status(200).send(filterMovies)

    Movie.find({genre: req.query.genre},(err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })


})

movieRouter.post("/", (req, res, next) =>{
    // const newMovie = req.body
    // newMovie._id = uuidv4()
    // movies.push(newMovie)

    // res.status(201).send(newMovie)
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newMovie)

    })

})


// delete 

movieRouter.delete("/:movieId", (req, res, next)=>{
    // const movieId = req.params.movieId
    // const movieIndex =movies.findIndex( movie => movie._id === movieId)
    // movies.splice(movieIndex, 1)
    // res.send("Succsesfully deleted")
    movie.findOneAndDelete({_id:req.params.movieId},(err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("seccessfully deleted item from DB")
    })
})

//put

movieRouter.put( "/:movieId", (req, res, next) =>{
    // const movieId = req.params.movieId
    // const movieIndex =movies.findIndex( movie => movie._id === movieId)

    // // using method Object.assign
    // const updatedMovie = Object.assign(movies[movieIndex],req.body)
    // res.status(201).send(updatedMovie)
    Movie.findByIdAndUpdate(
        {_id: req.params.movieId}, //fins one to update
        req.body, //update obj
        {new: true},  //send back the updated version please
        (err, updatedMovie)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )

})

module.exports = movieRouter