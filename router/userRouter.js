const User = require("../models/userModel");
const router = require("express").Router();
<<<<<<< HEAD
=======

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
>>>>>>> 008d5b8f03b673459482e36830df850d097f647e


<<<<<<< HEAD
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
const verifyToken = require("./verifyToken");


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

router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});




=======
>>>>>>> 008d5b8f03b673459482e36830df850d097f647e
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
