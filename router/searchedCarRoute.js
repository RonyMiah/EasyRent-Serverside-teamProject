const searchedCar = require('../models/searchedCarModel')

const router = require('express').Router();

router.post('/searchedcar', async (req, res) => {
    const searchedCar = new searchedCar({
        brandName: req.body.brandName,
        model: req.body.model,
        rating: req.body.rating,
        trips: req.body.trips,
        price: req.body.price,
        pickup: req.body.pickup,
        status: req.body.status,
        imgurl: req.body.imgrul
    })

    try {
        const ourCars = await searchedCar.save();
        res.status(201).json(ourCars);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.get('/findcar', async (req, res) => {
    const pickup = req.query.pickup
    try {
        const findcars = await searchedCar.find({ pickup });
        res.status(200).json(findcars);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;