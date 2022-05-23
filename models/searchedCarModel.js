const mongoose = require('mongoose');

const searchedCar = new mongoose.Schema({
    brandName: {
        type: String,
        require: true,
    },
    model: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    trips: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    product_catogary: {
        type: String,
        require: true,
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