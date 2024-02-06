const express = require("express");
const issueRouter = express.Router();
const Issue = require('../models/Issue.js'); // Ensure this path is correct

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find({})
      .sort({ 'upvotes': 'desc' }) // Sort by upvotes in descending order
      .exec((err, issues) => {
          if (err) {
              res.status(500);
              return next(err);
          }
          res.status(200).send(issues);
      });
});

// Get Issues by User Id
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issues) => {
    if(err){
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issues);
  });
});

// Add New Issue
issueRouter.post("/", (req, res, next) => {
  req.body.createdBy = req.auth._id;
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`);
    }
  );
});

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

// Vote Isuue

issueRouter.put('/upvote/:issueID', (req, res, next) => {
  Issue.findById(req.params.issueID, (err, issue) => {
      if (err) {
          res.status(500);
          return next(err);
      }

      const userId = req.auth._id;
      const hasUpvoted = issue.upvotes.includes(userId);
      const hasDownvoted = issue.downvotes.includes(userId);

      if (!hasUpvoted) {
          if (hasDownvoted) {
              issue.downvotes.pull(userId); // Switch vote from down to up
          }
          issue.upvotes.push(userId);
      }

      issue.save((saveErr, updatedIssue) => {
          if (saveErr) {
              res.status(500);
              return next(saveErr);
          }
          res.status(201).send(updatedIssue);
      });
  });
});
issueRouter.put('/downvote/:issueID', (req, res, next) => {
  Issue.findById(req.params.issueID, (err, issue) => {
      if (err) {
          res.status(500);
          return next(err);
      }

      const userId = req.auth._id;
      const hasUpvoted = issue.upvotes.includes(userId);
      const hasDownvoted = issue.downvotes.includes(userId);

      if (!hasDownvoted) {
          if (hasUpvoted) {
              issue.upvotes.pull(userId); // Switch vote from up to down
          }
          issue.downvotes.push(userId);
      }

      issue.save((saveErr, updatedIssue) => {
          if (saveErr) {
              res.status(500);
              return next(saveErr);
          }
          res.status(201).send(updatedIssue);
      });
  });
});




module.exports = issueRouter;
