const User = require("../models/userModel");
const router = require("express").Router();

<<<<<<< HEAD
router.put("/:id", async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
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


// })

>>>>>>> 67de8f3c3898e9807551aa087adfdd79c58b1638


router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


<<<<<<< HEAD


=======
router.get("/findAll", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
>>>>>>> 67de8f3c3898e9807551aa087adfdd79c58b1638
