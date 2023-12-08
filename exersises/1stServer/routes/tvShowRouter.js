const express = require("express")
const tvShowRouter = express.Router()
const {v4: uuidv4} = require('uuid')




const tvShows =[
    {title: "Rick and Morty", _id: uuidv4()},
    {title: "Watchman",  _id: uuidv4()},
    {title: "Westworld",  _id: uuidv4()},
    {title: "Friends",  _id: uuidv4()}
]



tvShowRouter.get("/", (req, res) =>{
    res.send(tvShows)
})

tvShowRouter.post("/", (req, res) =>{
    const newTvShow = req.body
    newTvShow._id = uuidv4()
    tvShows.push(newTvShow)

    res.send("success")
})

module.exports = tvShowRouter