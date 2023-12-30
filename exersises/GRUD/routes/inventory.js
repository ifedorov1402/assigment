const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')
const inventory = require("../models/inventory.js")



inventoryRouter.get("/", (req, res, next) =>{

    Inventory.find((err, inventory)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })

})

// Get One
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    const inventoryId = req.params.inventoryId;

    // Use Mongoose's findById method to query the database
    Inventory.findById(inventoryId, (err, foundInventory) => {
        if (err) {
            res.status(500);
            return next(err); // Forward the error to the error handler
        }

        if (!foundInventory) {
            const error = new Error(`Item with ID ${inventoryId} was not found`);
            res.status(404); // Use 404 status for not found
            return next(error);
        }

        res.status(200).send(foundInventory);
    });
});


inventoryRouter.post("/", (req, res, next) =>{
 
        const newInventory = new Inventory(req.body)
        newInventory.save((err, savedInventory)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newInventory)
    
        })
    
    })

    // delete 

inventoryRouter.delete("/:inventoryId", (req, res, next)=>{
   
    inventory.findOneAndDelete({_id:req.params.inventoryId},(err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("seccessfully deleted item from DB")
    })
})

//put

inventoryRouter.put( "/:inventoryId", (req, res, next) =>{

    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId}, //fins one to update
        req.body, //update obj
        {new: true},  //send back the updated version please
        (err, updatedInventory)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )

})



module.exports = inventoryRouter








// //get by genra
// movieRouter.get("/search/genre", (req, res, next) =>{


//     Movie.find({genre: req.query.genre},(err, movies) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(movies)
//     })


// })

// movieRouter.post("/", (req, res, next) =>{
 
//     const newMovie = new Movie(req.body)
//     newMovie.save((err, savedMovie)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(newMovie)

//     })

// })






