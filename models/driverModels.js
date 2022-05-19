const mongoose = require("mongoose");
const singleDriver = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        experience: {
            type: String,
        },
        address: {
            type: String,
        },
        category: {
            type: String,
        },
        phone: {
            type: String,
        },
        price: {
            type: String,
        },
        picture: {
            type: String,
        },
    },
    { timeStamps: true }
);
module.exports = mongoose.model("driver", singleDriver);

