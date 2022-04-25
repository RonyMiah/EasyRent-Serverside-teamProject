const serviceModel = require("../models/Servicemodel");
const router = require("express").Router();

router.post("/service", async (req, res) => {
  const serviceCar = new serviceModel({
    image: req.body.image,
    year: req.body.year,
    name: req.body.name,
    price: req.body.price,
    kilo: req.body.kilo,
    type: req.body.type,
    fual: req.body.fual,
    discountPrice: req.body.discountPrice,
    details: req.body.details,
  });

  try {
    const service = await serviceCar.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/service", async (req, res) => {
  try {
    const findService = await serviceModel.find();
    console.log(findService);
    res.status(200).json(findService);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
