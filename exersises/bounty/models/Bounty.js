const mongoose = require('mongoose');
const Schema = mongoose.Schema


//Movie BluePrint

const BountySchema = new Schema({
    first_name: String,
    last_N: String,
    living: Boolean,
    Bounty_Ammount: Number,
    type: String
    // Add more fields as needed
    
})


module.exports = mongoose.model("Bounty", BountySchema )