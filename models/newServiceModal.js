const mongoose = require('mongoose');
const newServiceSchema = mongoose.Schema({
    image: String,
    carType: String,
    carName: String,
    people: Number,
    type: String,
    mileage: String,
    enhanced: String,
    shuttle: String,
    cancellation: String,
    payAt: String,
    recommend: String,
    cost: Number,
    count: String,
    details: String,

})
module.exports = newServiceSchema;