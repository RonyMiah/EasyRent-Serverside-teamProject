const mongoose = require("mongoose");

const serviceModel = new mongoose.Schema(
  {
    picture: {
      type: Object,
    },
    image: {
      type: String,
    },
    year: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
    },
    kilo: {
      type: Number,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    fual: {
      type: String,
      require: true,
    },
    discountPrice: {
      type: Number,
      require: true,
    },
    details: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Service", serviceModel);
