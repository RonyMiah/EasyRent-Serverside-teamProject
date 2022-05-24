const router = require("express").Router();
const SSLCommerzPayment = require("sslcommerz");
const rentSinCarModal = require("../models/rentSinCarModal");
const { v4: uuidv4 } = require("uuid");

//sslcommerz init
router.post("/init", async (req, res) => {
  // console.log("hitting", req.body);
  const data = new rentSinCarModal({
    total_amount: req.body?.rent,
    currency: "USD",
    tran_id: uuidv4(),
    success_url: "https://guarded-taiga-13015.herokuapp.com/api/find/success",
    fail_url: "https://guarded-taiga-13015.herokuapp.com/api/find/fail",
    cancel_url: "https://guarded-taiga-13015.herokuapp.com/api/find/cancel",
    ipn_url: "https://guarded-taiga-13015.herokuapp.com/api/find/ipn",
    shipping_method: "Courier",
    paymentStatus: "pending",
    product_name: req.body?.carName,
    product_imgUrl: req.body?.imgUrl,
    product_category: req.body.product_category || "Brand",
    product_profile: "Car",
    cus_name: req.body?.name,
    cus_email: req.body?.email,
    cus_img: req.body?.imgURL,
    cus_add1: req.body?.location,
    cus_city: req.body?.location,
    cus_country: "Bangladesh",
    cus_phone: 0171111,
    ship_name: req.body?.name,
    ship_add1: req.body?.location,
    ship_city: req.body?.location,
    ship_state: req.body?.startValue,
    ship_postcode: 1000,
    ship_country: "Bangladesh",
    multi_card_name: "mastercard",
    date_start: req.body?.startDate,
    date_end: req.body?.endDate,
  });
  // console.log("ssl", data);
  const user = await data.save();
  const sslcommer = new SSLCommerzPayment(
    process.env.STORE_ID1,
    process.env.STORE_PASS1,
    false
  ); //true for live default false for sandbox
  sslcommer.init(data).then((data) => {
    //process the response that got from sslcommerz
    //https://developer.sslcommerz.com/doc/v4/#returned-parameters
    // console.log(data.GatewayPageURL);
    try {
      res.status(201).json(data.GatewayPageURL);
    } catch (error) {
      res.status(500).json(error);
    }
  });
});

router.post("/success", async (req, res) => {
  const filter = { tran_id: req.body.tran_id };
  const update = { val_id: req.body.val_id };
  let order = await rentSinCarModal.findOneAndUpdate(filter, update, {
    new: true,
  });

  res
    .status(200)
    .redirect(`https://easyrent-85ae2.web.app/rent/${req.body.tran_id}`);
});
router.post("/fail", async (req, res) => {
  const filter = { tran_id: req.body.tran_id };
  // res.status(400).json(req.body);
  res.status(200).redirect("https://easyrent-85ae2.web.app/paymentcancel");
  let order = await rentSinCarModal.findOneAndDelete(filter, { new: true });
});
router.post("/cancel", async (req, res) => {
  const filter = { tran_id: req.body.tran_id };
  res.status(200).redirect("https://easyrent-85ae2.web.app/paymentcancel");
  let order = await rentSinCarModal.findOneAndDelete(filter, { new: true });
});

router.get("/orderCar/:tran_id", async (req, res) => {
  const id = req.params.tran_id;
  let order = await rentSinCarModal.findOne({ tran_id: id });
  res.status(200).json(order);
});

router.post("/confirm", async (req, res) => {
  let order = await rentSinCarModal.findOne({ tran_id: req.body.tran_id });
  if (order.val_id === req.body.val_id) {
    const filter = { tran_id: req.body.tran_id };
    const update = { paymentStatus: "Successful" };
    let order = await rentSinCarModal.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.send(order.paymentStatus);
  } else {
    return res.status(401).json("Payment not complete");
  }
});

router.get("/rentAllCars", async (req, res) => {
  try {
    const all = await rentSinCarModal.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/rentSingleOrder/:email", async (req, res) => {
  try {
    // console.log(req.params.email);
    // product_category: "Brand",
    const all = await rentSinCarModal.find({
      cus_email: req.params.email,
    });
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/coursePayed/:email", async (req, res) => {
  try {
    // console.log(req.params.email);
    const course = await rentSinCarModal.find({
      product_category: "Course",
      paymentStatus: "Successful",
      cus_email: req.params.email,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }

});
router.delete('/rentCarsdelete/:id', (req, res) => {

  rentSinCarModal.deleteOne({ _id: req.params.id }, (err) => {
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
