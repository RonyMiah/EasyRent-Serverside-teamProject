const mongoose = require("mongoose");

const Servicemodel = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
      unique: true,
    },
    year: {
      type: Number,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
      unique: true,
    },
    kilo: {
      type: Number,
      require: true,
      unique: true,
    },
    type: {
      type: String,
      require: true,
      unique: true,
    },
    fual: {
      type: String,
      require: true,
      unique: true,
    },
    discountPrice: {
      type: Number,
      require: true,
      unique: true,
    },
    details: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Servicemodel", Servicemodel);
