const Mainservice = require("../models/MainServicemodel");
const router = require("express").Router();


router.post("/addMainService", async (req, res) => {
    const serviceCar = new Mainservice({
     car_name: req.body.car_name,
     image: req.body.image,
     monthly_price: req.body.monthly_price,
     price_daily: req.body.price_daily,
     model: req.body.model,
     Ac: req.body.Ac,
      
    });
  
    try {
      const service = await serviceCar.save();
      res.status(201).json(service);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.get("/service_main", async (req, res) => {
    try {
      const findService = await Mainservice.find();
      // console.log(findService);
      res.status(200).json(findService);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  






module.exports = router;