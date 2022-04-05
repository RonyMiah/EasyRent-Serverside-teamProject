const router = require('express').Router();
const User = require("../models/userModel");


router.post('/register', async (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,

    })

    try {
        const saveUser = await newUser.save();
        console.log(saveUser);
        res.status(201).json(saveUser);

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }



})

module.exports = router;