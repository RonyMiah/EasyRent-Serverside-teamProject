const findBrand = require("../models/findBasisBrandModel");
const router = require("express").Router();

router.get("/findBrand", async (req, res) => {
  try {
    const car = await findBrand.find();
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
