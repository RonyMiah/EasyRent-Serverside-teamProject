const mongoose = require("mongoose");

const allCourseModel = new mongoose.Schema(
  {
    courseId: {
      type: String,
      require: true,
    },
    courseTitle: {
      type: String,
      require: true,
    },
    trainer: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    bannerImg: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("allfreecourse", allCourseModel);
