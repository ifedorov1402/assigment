const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const bounty =[
    {first_name: "dart ", last_N: "V", living: false, Bounty_Ammount: 0, type: "Jedi", _id: uuidv4()},
    {first_name: "Luke ", last_N: "Sky", living: true, Bounty_Ammount: 10000, type: "Jedi", _id: uuidv4()},
    {first_name: "Something ", last_N: "Else", living: true, Bounty_Ammount: 30000, type: "Sith", _id: uuidv4()},
    {first_name: "Esle ", last_N: "Something", living: false, Bounty_Ammount: 0, type: "Jedi", _id: uuidv4()}
]

bountyRouter.get("/", (req, res) =>{
    res.send(bounty)
})

bountyRouter.post("/", (req, res) =>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send("success")
})
bountyRouter.delete("/:id", (req, res) =>{
    const {id} = req.params
    const bountyIndex = bounty.findIndex(b => b._id === id)
    if (bountyIndex != -1){
        bounty.splice(bountyIndex, 1)
        res.send(`bounty with id ${id} deleted`)
    }
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send("success")
})
bountyRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    let updated = false;

    for (let i = 0; i < bounty.length; i++) {
        if (bounty[i]._id === id) {
            bounty[i] = { ...bounty[i], ...req.body, _id: id };
            updated = true;
            break; // Break out of the loop once the item is updated
        }
    }

    if (updated) {
        res.send(`bounty with id ${id} updated`);
    } else {
        res.status(404).send("bounty not found");
    }
});




module.exports = bountyRouter