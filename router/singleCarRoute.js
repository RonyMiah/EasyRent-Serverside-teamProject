const searchedCar = require('../models/searchedCarModel')

const router = require('express').Router();

router.get('/car/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const findcar = await searchedCar.findById(id);
        res.status(200).json(findcar);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;