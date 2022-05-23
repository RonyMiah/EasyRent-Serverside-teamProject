const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const blogScrema = require('../models/blogModals');
const blogs = new mongoose.model("blogs", blogScrema)

// Post method
router.post("/blog", async (req, res) => {
    const pic = req.files.picture;
    const picData = pic.data;
    const endodedPic = picData.toString('base64');
    const imgBuffer = Buffer.from(endodedPic, 'base64')
    const input = new blogs({
        picture: imgBuffer,
        image: req.body.image,
        title: req.body.title,
        details: req.body.details,
        
    
    })
     try{
         const result = await input.save()
         res.status(200).json({
             message: 'Blogs was inserted successfully',
             obj: result
         });
     } catch (error) {
         res.status(500).json(error);
     }
 
     
 })
 
 // get method
 router.get("/getblogs", async (req, res) => {
     try{
         const result = await blogs.find({})
         res.status(200).send(result);
     } catch (err) {
         res.status(500).json(err);
     }
 })
 // delete method 
 router.delete("/deleteblogs/:id", async (req, res) => {
     const id = req.params.id;
     try{
         await blogs.deleteOne({ _id: id });
         res.status(200).json({
             message: 'Order deleted successfully'
         });
     } catch (err) {
         res.status(500).json(err);
     }
 
 })
 module.exports = router