const mongoose = require('mongoose');

const userDetails = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    carInfo:{
        type: Object,
        require: true
    }
}, { timeStamps: true });

module.exports = mongoose.model("userDetails", userDetails);