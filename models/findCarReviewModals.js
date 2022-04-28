const mongoose = require("mongoose");

const findCarReviewModals = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    carName: {
      type: String,
      require: true,
    },
    star: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Car Review", findCarReviewModals);
