const NewOrder = require("../models/createOrder");
const router = require("express").Router();

router.post("/createOrder", async (req, res) => {
  console.log(req.body);
  try {
    const newOrder = req.body;
    if (!newOrder.userId) {
      res.status(400).json({ message: "No order data" });
    } else {
      const order = await new NewOrder(newOrder).save();
      res.status(201).json(order);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
