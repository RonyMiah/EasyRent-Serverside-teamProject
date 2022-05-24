const findSingleCarRent = require("../models/findSingleCarRentModal");
const router = require("express").Router();

router.post("/singleCarRent", async (req, res) => {
  // console.log(req.body);
  const singleCarRent = new findSingleCarRent({
    name: req.body?.name,
    email: req.body?.email,
    photoURL: req.body?.photoURL,
    carName: req.body?.carName,
    startDate: req.body?.startDate,
    endDate: req.body?.endDate,
    rent: req.body?.rent,
    location: req.body?.location,
    image: req.body?.imgUrl,
    rentStatus: req.body?.rentStatus,
  });
  console.log(singleCarRent);

  try {
    const singleRentCar = await singleCarRent.save();
    res.status(201).json(singleRentCar);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/singleCarRent", async (req, res) => {
  try {
    const singleRentCar = await findSingleCarRent.find();
    res.status(200).json(singleRentCar);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/deletesingleCarRent/:id', async (req, res) => {
  await findSingleCarRent.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        error: 'There was a server side error'
      })
    } else {
      res.status(200).json({
        message: "Order is deleted successfully"
      })
    }
  }).clone()


});

module.exports = router;
