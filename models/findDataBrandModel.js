const mongoose = require("mongoose");
const findDataBrand = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    title1: {
      type: String,
      require: true,
    },
    description1: {
      type: String,
      require: true,
    },
    imgUrl1: {
      type: String,
      require: true,
    },
    topTitle1: {
      type: String,
      require: true,
    },
    topDescription1: {
      type: String,
      require: true,
    },
    topTitle2: {
      type: String,
      require: true,
    },
    topDescription2: {
      type: String,
      require: true,
    },
    topTitle3: {
      type: String,
      require: true,
    },
    topDescription3: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model("findDataBrandModel", findDataBrand);
