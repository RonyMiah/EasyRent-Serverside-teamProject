const mongoose = require("mongoose");

const findSingleCarRent = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    carName: {
      type: String,
      require: true,
    },
    startDate: {
      type: String,
      require: true,
    },
    endDate: {
      type: String,
      require: true,
    },
    rent: {
      type: Number,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("singleCarRent", findSingleCarRent);
