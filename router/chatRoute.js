const express = require('express');

const { signup, chatLogin } = require('../controllers/chatAuth');

const router = express.Router();

router.post('/signup', signup);
router.post('/chatLogin', chatLogin);

module.exports = router;