const findCarReview = require("../models/findCarReviewModals");
const router = require("express").Router();

router.post("/carReview", async (req, res) => {
  console.log(req.body)
  const carReview = new findCarReview({
    // title: req.body.title,
    // title: req.body.title,
    // title: req.body.title,
    // title: req.body.title,
    // description: req.body.description,
    // youtube_video_link: req.body.youtube_video_link,
  });

  try {
    const carReview = await carReview.save();
    res.status(201).json(carReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/carReview", async (req, res) => {
  try {
    const carReview = await findCarReview.find();
    res.status(200).json(carReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
