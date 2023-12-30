const express = require('express')
const bookRouter =  express.Router()
const Book = require("../models/book.js")
const book = require('../models/book.js');
const { error } = require('console');

///Get All Book
bookRouter.get("/", async (req, res, next) => {
    try {
        const book = await Book.find();
        res.status(200).send(book);
    } catch (err) {
        res.status(500);
        next(err);
    }
});

// Get By Author
bookRouter.get("/:authorID", async(req, res, next) =>{
    try{
        const books = await Book.find({author: req.params.authorID})
        res.status(200).send(books)
    }
    catch (err){
        res.status(500);
        next(err)
    }
})

//Add new Book
bookRouter.post("/:authorID", async(req, res, next) =>{
    try{
        req.body.author = req.params.authorID
        const newBook = new Book(req.body)
        const savedBook = await newBook.save();
        res.status(201).send(savedBook)
    } catch (err){
        res.status(500).send(err)
        next(err)
    }

})

//like a Book
bookRouter.put("/like/:bookID", async (req, res ,next) => {
    const id = req.params.bookID

    Book.findByIdAndUpdate(id, {$inc: {likes: 1}},{new: true})
    .then(updatedBook => {
        if (updatedBook){
            res.send(updatedBook)
        } else {
            res.status(404).send("Book not founbd")
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("internal server Error ")
    })
})

// Finf books by like range

bookRouter.get("/search/bylikes", async (req, res, next) => {
    try {
        const books = await Book.where("likes").gte(1).exec();
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send(err);
        next(err);
    }
});


module.exports = bookRouter