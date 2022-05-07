const mongoose = require('mongoose');

const addReviews = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    imgUrl: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    opinion: {
        type: String,
        require: true,
    },
}, { timeStamps: true });

module.exports = mongoose.model("addReviews", addReviews);