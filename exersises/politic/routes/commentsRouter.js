const express = require("express");
const commentsRouter = express.Router();
const Comment = require('../models/Comment.js'); // Ensure this path is correct

// Get all comments for a specific issue
commentsRouter.get("/issue/:issueId", (req, res, next) => {
    Comment.find({ issue: req.params.issueId }, (err, comments) => {
        if(err){
            res.status(500);
            return next(err);
        }
        return res.status(200).send(comments);
    });
});

// Add a new comment to an issue
commentsRouter.post("/issue/:issueId", (req, res, next) => {
    req.body.issue = req.params.issueId;
    req.body.createdBy = req.auth._id; // assuming you have user id in req.auth
    const newComment = new Comment(req.body);

    newComment.save((err, savedComment) => {
        if(err){
            res.status(500);
            return next(err);
        }
        console.log(savedComment)
        return res.status(201).send(savedComment);
    });
});

// Update a comment
commentsRouter.put("/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.commentId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedComment) => {
            if(err){
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedComment);
        }
    );
});

// Delete a comment
commentsRouter.delete("/:commentId", (req, res, next) => {
    Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.auth._id },
        (err, deletedComment) => {
            if(err){
                res.status(500);
                return next(err);
            }
            return res.status(200).send(`Successfully deleted comment`);
        }
    );
});

module.exports = commentsRouter;
