const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const rentedcarScrema = require('../models/rentedcar');
const rentedcars = new mongoose.model("rentedcars", rentedcarScrema)


// Post method
router.post("/rented", async (req, res) => {
   const input = new rentedcars({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        division: req.body.division,
        age: req.body.age,
   })
    try{
        const result = await input.save()
        res.status(200).json({
            message: 'Order was inserted successfully'
        });
    } catch (error) {
        res.status(500).json(error);
    }

    
})

// get method
router.get("/allorder", async (req, res) => {
    try{
        const result = await rentedcars.find({})
        res.status(200).send(result);
    } catch (err) {
        res.status(500).json(err);
    }
})
// delete method 
router.delete("/deleteorder/:id", async (req, res) => {
    const id = req.params.id;
    try{
        await rentedcars.deleteOne({ _id: id });
        res.status(200).json({
            message: 'Order deleted successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }

})
module.exports = router