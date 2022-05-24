const User = require("../models/userModel");
const router = require('express').Router();

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

router.delete('/deleteUser/:id' , async(req, res) => {
  await User.deleteOne({ _id: req.params.id}, (err) => {
      if(err){
          res.status(500).send({
              error: 'There was a server side error'
          })
      } else {
          res.status(200).json({
              message: "Todo is deleted successfully"
          })
      }
  }).clone()
  

});

module.exports = router;
