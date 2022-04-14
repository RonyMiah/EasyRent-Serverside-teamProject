const Course = require("../models/courseModel");

const router = require("express").Router();

router.post("/courseAdd", async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    youtube_video_link: req.body.youtube_video_link,
  });

  try {
    const saveCourse = await course.save();
    res.status(201).json(saveCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/allCourse", async (req, res) => {
  try {
    const allCourse = await Course.find();
    res.status(200).json(allCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
