const userDetails = require('../models/userDetailsModel');

const router = require('express').Router();

router.post('/userdetails', async (req, res) => {
    const userDetail = new userDetails({
        name: req.body.name,
        number: req.body.number,
        carInfo: req.body.carInfo
    })

    try {
        const user = await userDetail.save();
        res.status(201).json(user);
    } catch (error){
        res.status(500).json(error);
    }
});

module.exports = router;