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

router.delete('/deleteallOrders/:id' , async(req, res) => {
  console.log(req.params.id)
  await NewOrder.deleteOne({ _id: req.params.id}, (err) => {
      if(err){
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
