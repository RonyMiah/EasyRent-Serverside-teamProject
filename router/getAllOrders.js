const NewOrder = require("../models/createOrder");
const router = require("express").Router();

router.get("/allOrders", async (req, res) => {
  try {
    const orders = await NewOrder.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
});

module.exports = router;
