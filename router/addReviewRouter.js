const addReviews = require('../models/addReviewModel');

const router = require('express').Router();

router.post('/addreview', async (req, res) => {
    const addReview = new addReviews({
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        designation: req.body.designation,
        rating: req.body.rating,
        opinion: req.body.opinion

    })

    try {
        const review = await addReview.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/addreview', async(req, res)=>{
    try {
        const findReview = await addReviews.find({})
        res.status(200).json(findReview); 
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;