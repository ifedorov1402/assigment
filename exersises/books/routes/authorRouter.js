const express = require('express')
const authorRouter =  express.Router()
const Author = require("../models/author.js")
const author = require('../models/author.js')

///Get All Authors
authorRouter.get("/", async(req, res, next) => {
    try {
        const author = await Author.find();
        res.status(200).send(author);
    } catch (err) {
        res.status(500);
        next(err);
    }
})
//Add new Author
authorRouter.post("/", async (req, res, next) => {
    try {
        const newAuthor = new Author(req.body);
        const savedAuthor = await newAuthor.save();
        res.status(201).send(savedAuthor);
    } catch (err) {
        res.status(500).send(err);
        next(err);
    }
});

authorRouter.get("/search", async (req, res, next) => {
    const { author } = req.query;
    const pattern = new RegExp(author);

    try {
        const authors = await Author.find({ name: { $regex: pattern, $options: "i" } });
        res.status(200).send(authors);
    } catch (err) {
        res.status(500).send(err);
        next(err);
    }
});



module.exports = authorRouter