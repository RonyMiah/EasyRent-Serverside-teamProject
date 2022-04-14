const mongoose = require("mongoose");
const findBrand = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    rent: {
      type: Number,
      default: 100,
    },
    available: {
      type: Number,
      default: 25,
    },
    star: {
      type: Number,
      default: 4,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model("findBasisBrandModel", findBrand);
