const sliderSingleBrandCarModel = require("../models/sliderSingleBrandCarModel");
const router = require("express").Router();

router.post("/sliderSingleCar", async (req, res) => {
//   console.log(req.body);
  const sliderSingleCar = new sliderSingleBrandCarModel({
    name: req.body.name,
    imgUrl1: req.body.imgUrl1,
    imgUrl2: req.body.imgUrl2,
    imgUrl3: req.body.imgUrl3,
    imgUrl4: req.body.imgUrl4,
    imgUrl5: req.body.imgUrl5,
  });

  try {
    const sliderSingleCar1 = await sliderSingleCar.save();
    res.status(201).json(sliderSingleCar1);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/sliderSingleCar", async (req, res) => {
  try {
    const sliderSingleCar = await sliderSingleBrandCarModel.find();
    res.status(200).json(sliderSingleCar);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
