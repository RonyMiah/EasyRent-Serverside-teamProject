const findCar = require('../models/carModel');

const router = require('express').Router();


router.post("/addcar", async (req, res) => {
    const findCar = new findCar({
        id: req.body.id,
        brandName: req.body.brandName,
        imgUrl: req.body.imgUrl
    })

    try {
        const saveCourse = await findCar.save();
        res.status(201).json(saveCourse);
    } catch (error) { 
        res.status(500).json(error);
    }
})





router.get("/findCar", async (req, res) => {
    try {
        const car = await findCar.find();
        res.status(200).json(car);
    } catch (error) {  
        res.status(500).json(error);
    }
})



module.exports = router;