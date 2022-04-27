const mongoose = require("mongoose");

const sliderSingleBrandCarModel = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    imgUrl1: {
      type: String,
      require: true,
    },
    imgUrl2: {
      type: String,
      require: true,
    },
    imgUrl3: {
      type: String,
      require: true,
    },
    imgUrl4: {
      type: String,
      require: true,
    },
    imgUrl5: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model(
  "sliderSingleBrandCar",
  sliderSingleBrandCarModel
);
