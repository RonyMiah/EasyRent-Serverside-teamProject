const mongoose = require('mongoose');

const searchedCar = new mongoose.Schema({
    brandName: {
        type: String,
        require: true,
        unique: true
    },
    pickup: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    imgurl: {
        type: String,
        require: true,
    },
}, { timeStamps: true });

module.exports = mongoose.model("searchedCar", searchedCar);