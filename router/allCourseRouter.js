const allCourse = require("../models/allCourseModel");

const router = require("express").Router();

router.post("/addCourse", async (req, res) => {
  const courses = new allCourse({
    courseId: req.body.courseId,
    courseTitle: req.body.courseTitle,
    trainer: req.body.trainer,
    description: req.body.description,
    bannerImg: req.body.bannerImg,
    price: req.body.price,
  });

  try {
    const course = await courses.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/courses", async (req, res) => {
  try {
    const course = await allCourse.find();
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
