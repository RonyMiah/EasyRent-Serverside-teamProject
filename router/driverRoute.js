const singleDriver = require("../models/driverModels");
const router = require("express").Router();

router.post("/singleDriver", async (req, res) => {
    // console.log(req.body);
    const singleDriverRent = new singleDriver({
        name: req.body?.name,
        email: req.body?.email,
        experience: req.body?.experience,
        address: req.body?.address,
        category: req.body?.category,
        phone: req.body?.phone,
        price: req.body?.price,
        picture: req.body?.picture,
    });
    console.log(singleDriverRent);

    try {
        const singleRentDriver = await singleDriverRent.save();
        res.status(201).json(singleRentDriver);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/singleDriver", async (req, res) => {
    try {
        const findDriver = await singleDriver.find();
        res.status(200).json(findDriver);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

