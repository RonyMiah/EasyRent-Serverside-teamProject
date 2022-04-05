const router = require('express').Router();

router.get('/userTest', async (req, res) => {
    res.send("user successfully added");
})


router.post('/userPost', async (req, res) => {
    const userName = req.body.userName;
    res.send("you name is" + userName);
    console.log(userName);
})


module.exports = router;