const NewOrder = require("../models/createOrder");
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
    const order = await NewOrder.findOneAndDelete(
      { _id: id },
      {
        new: true,
        upsert: true,
      }
    ).populate({
      path: "serviceId",
      model: "Service",
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ err: err.massage });
  }
});
 
router.put("/orders/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const order = await NewOrder.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          ...data,
        },
      },
      {
        new: true,
        upsert: true,
      }
    ).populate({
      path: "serviceId",
      model: "Service",
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ err: err.massage });
  }
});
 
module.exports = router;
