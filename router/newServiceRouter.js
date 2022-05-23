const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const newServiceScrema = require('../models/newServiceModal');
const newService = new mongoose.model("newService", newServiceScrema)

// Post method
router.post("/newService", async (req, res) => {
    const input = new newService({
        image: req.body.image,
        carType: req.body.carType,
        carName: req.body.carName,
        people: req.body.people,
        type: req.body.type,
        mileage: req.body.mileage,
        enhanced: req.body.enhanced,
        shuttle: req.body.shuttle,
        cancellation: req.body.cancellation,
        payAt: req.body.payAt,
        recommend: req.body.recommend,
        cost: req.body.cost,
        count: req.body.count,
        details: req.body.details,
    
    })
     try{
         const result = await input.save()
         res.status(200).json({
             message: 'Order was inserted successfully',
             obj: result
         });
     } catch (error) {
         res.status(500).json(error);
     }
 
     
 })
 
 // get method
 router.get("/getnewService", async (req, res) => {
     try{
         const result = await newService.find({})
         res.status(200).send(result);
     } catch (err) {
         res.status(500).json(err);
     }
 })
 // delete method 
 router.delete("/deletenewService/:id", async (req, res) => {
     const id = req.params.id;
     try{
         await newService.deleteOne({ _id: id });
         res.status(200).json({
             message: 'Order deleted successfully'
         });
     } catch (err) {
         res.status(500).json(err);
     }
 
 })
 module.exports = router