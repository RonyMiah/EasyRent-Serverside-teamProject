const searchedCar = require('../models/searchedCarModel')
const router = require('express').Router();

router.get('/searchedcars', async (req, res) => {
    try {
        const findcars = await searchedCar.find();
        res.status(200).json(findcars); 
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;