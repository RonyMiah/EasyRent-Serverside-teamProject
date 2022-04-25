const findSingleCarRent = require("../models/findSingleCarRentModal");
const router = require("express").Router();

router.post("/singleCarRent", async (req, res) => {
  console.log(req.body);
  const singleCarRent = new findSingleCarRent({
    name: req.body.name,
    email: req.body.email,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    rent: req.body.rent,
  });

  try {
    const singleCarReview = await singleCarRent.save();
    // console.log(carReview);
    res.status(201).json(singleCarReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/singleCarRent", async (req, res) => {
  try {
    const singleCarReview = await singleCarRent.find();
    res.status(200).json(singleCarReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
