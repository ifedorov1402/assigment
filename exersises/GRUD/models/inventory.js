const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Movie BluePrint

const inventorySchema = new Schema({

        name: String,
        price: Number,
        quantity: Number

})


module.exports = mongoose.model("Inventory", inventorySchema)