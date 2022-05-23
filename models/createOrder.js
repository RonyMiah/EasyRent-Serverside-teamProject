const mongoose = require("mongoose");

const createOrder = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      
    },
    address: {
      type: String,
      require: true,
     
    },
    division: {
      type: String,
      require: true,
      
    },
    year: {
      type: Number,
      require: true,
    },
   
    serviceId:{
      type: mongoose.Schema.ObjectId,
      ref: "Service",
      require: true,
    },
    userId:{
     type: String,
      require: true,
    },
  
  },
  { timeStamps: true }
);

module.exports = mongoose.model("NewOrder", createOrder);
