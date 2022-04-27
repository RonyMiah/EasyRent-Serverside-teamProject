const User = require("../models/userModel");
const verifyToken = require("./verifyToken");

const router = require('express').Router();

// router.put("/find/:id", verifyToken, async (req, res) => {
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
//   }
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//       $set: req.body
//     }, { new: true });

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json(error);
//   }


// })



router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/findAll", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;