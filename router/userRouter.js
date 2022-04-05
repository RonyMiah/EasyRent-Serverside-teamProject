const router = require('express').Router();

router.get('/userTest', async (req, res) => {
    res.send("user successfully added");
})

module.exports = router;