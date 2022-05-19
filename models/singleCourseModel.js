const mongoose = require("mongoose");

const singleCourseModel = new mongoose.Schema(
  {
    courseId: {
      type: String,
    },
    course: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("singleCourse", singleCourseModel);
