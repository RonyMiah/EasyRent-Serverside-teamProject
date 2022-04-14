const mongoose = require("mongoose");

const carModel = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    brandName: {
      type: String,
      require: true,
      unique: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("findCar", carModel);
