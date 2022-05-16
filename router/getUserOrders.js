const NewOrder = require("../models/createOrder");
// const serviceModel = require("../models/Servicemodel");
const router = require("express").Router();

router.get("/orders/:email", async (req, res) => {
  try {
    const orders = await NewOrder.find({ userId: req.params.email }).populate({
      path: "serviceId",
      model: "Service",
    });
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
});

router.delete("/orders/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await NewOrder.findOneAndDelete(query);
    res.json(result);
  } 
  
  catch (err) {
    res.status(500).json({ err: err.massage });
  }
});

module.exports = router;
