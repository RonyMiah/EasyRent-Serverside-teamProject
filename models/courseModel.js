const mongoose = require("mongoose");

const courseModel = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
    youtube_video_link: {
      type: String,
      required: [true, "Youtube video link is required."],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Course", courseModel);
