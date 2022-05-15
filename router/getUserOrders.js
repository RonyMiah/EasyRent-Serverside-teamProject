const NewOrder = require("../models/createOrder");
const router = require("express").Router();


router.get("/orders/:email", async (req, res) => {
    try{
        const orders = await NewOrder.find({userId: req.params.email});
        res.status(201).json(orders);
    }  
    catch(err){
        res.status(500).json({err: err.massage})
    }
    });

    module.exports = router;