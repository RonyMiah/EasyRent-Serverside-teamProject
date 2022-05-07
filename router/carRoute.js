const findCar = require("../models/carModel");
const router = require("express").Router();

router.get("/findCar", async (req, res) => {
  try {
    const car = await findCar.find();
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
