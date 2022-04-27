const findCarReview = require("../models/findCarReviewModals");
const router = require("express").Router();

router.post("/carReview", async (req, res) => {
  // console.log(req.body);
  const carReview = new findCarReview({
    name: req.body.name,
    image: req.body.image,    
    carName: req.body.carName,
    star: req.body.star,
    description: req.body.description,
  });

  try {
    const singleCarReview = await carReview.save();
    // console.log(carReview);
    res.status(201).json(singleCarReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/carReview", async (req, res) => {
  try {
    const singleCarReview = await findCarReview.find();
    res.status(200).json(singleCarReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
