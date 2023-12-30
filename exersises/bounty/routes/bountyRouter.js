const express = require("express")
const bountyRouter = express.Router()
// const {v4: uuidv4} = require('uuid')
const Bounty = require('../models/Bounty.js')


// const bounty =[
//     {first_name: "dart ", last_N: "V", living: false, Bounty_Ammount: 0, type: "Jedi", _id: uuidv4()},
//     {first_name: "Luke ", last_N: "Sky", living: true, Bounty_Ammount: 10000, type: "Jedi", _id: uuidv4()},
//     {first_name: "Something ", last_N: "Else", living: true, Bounty_Ammount: 30000, type: "Sith", _id: uuidv4()},
//     {first_name: "Esle ", last_N: "Something", living: false, Bounty_Ammount: 0, type: "Jedi", _id: uuidv4()}
// ]

bountyRouter.get("/", async (req, res, next) => {
    try {
        const bounty = await Bounty.find();
        res.status(200).send(bounty);
    } catch (err) {
        res.status(500);
        next(err);
    }
});

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body);
    newBounty.save()
        .then(savedBounty => {
            res.status(201).send(savedBounty);
        })
        .catch(err => {
            res.status(500);
            next(err);
        });
});



bountyRouter.delete("/:id", (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            res.status(200).send(`Bounty with id ${req.params.id} deleted`);
        })
        .catch(err => {
            res.status(500);
            next(err);
        });
});

bountyRouter.put("/:id", (req, res) => {
    const { id } = req.params;

    Bounty.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedBounty => {
            if (updatedBounty) {
                res.send(updatedBounty);
            } else {
                res.status(404).send("Bounty not found");
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });


// bountyRouter.put("/:id", (req, res) => {
//     const { id } = req.params;
//     let updated = false;

//     for (let i = 0; i < bounty.length; i++) {
//         if (bounty[i]._id === id) {
//             bounty[i] = { ...bounty[i], ...req.body, _id: id };
//             updated = true;
//             break; // Break out of the loop once the item is updated
//         }
//     }

//     if (updated) {
//         res.send(bounty[updatedIndex]);
//     } else {
//         res.status(404).send("bounty not found");
//     }
});




module.exports = bountyRouter