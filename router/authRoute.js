const router = require("express").Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    try {
        const saveUser = await newUser.save();
        // console.log(saveUser);
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        !user && res.status(401).json("User Not Found !");
        const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        ).toString(CryptoJS.enc.Utf8);
        hashPassword !== req.body.password &&
            res.status(401).json("Wrong password");

        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "7d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, token });
    } catch (error) {
        res.status(500).json(error);
    }
});


router.delete("/logout", async (req, res) => {
    const user = await User.findOne({
        userName: req.body.userName,
    });
    res.user("");
    res.redirect("/home");
});

module.exports = router;


