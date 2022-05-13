const mongoose = require('mongoose');
const rentedcarSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    division: String,
    age: Number,

})
module.exports = rentedcarSchema