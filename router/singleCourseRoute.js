const singleCourse = require("../models/singleCourseModel");

const router = require("express").Router();

router.post("/addSingleCourse", async (req, res) => {
  const course = new singleCourse({
    courseId: req.body.courseId,
    course: req.body.course,
    data: req.body.data,
  });

  try {
    const saveCourse = await course.save();
    res.status(201).json(saveCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/singleCourse/:courseId", async (req, res) => {
  try {
    const id = req.params.courseId;
    const allCourse = await singleCourse.findOne({courseId: id});
    res.status(200).json(allCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get('/service/:id', async (req, res) => {
//     const id = req.params.id;
//     const service = await Service.findOne({_id: id});
//     res.status(200).json(service);
//   })

module.exports = router;
