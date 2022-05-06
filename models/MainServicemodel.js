const mongoose = require("mongoose");

const MainServiceModel = new mongoose.Schema(
  {
    car_name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
   
    monthly_price: {
      type: Number,
      require: true,
    },
    price_daily: {
      type: Number,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    Ac: {
      type: String,
      require: true,
    },
   
  },
  { timeStamps: true }
);

module.exports = mongoose.model("MainService", MainServiceModel);
