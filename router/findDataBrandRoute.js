const findDataBrand = require("../models/findDataBrandModel");
const router = require("express").Router();

router.get("/findDataBrand", async (req, res) => {
  try {
    const car = await findDataBrand.find();
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
