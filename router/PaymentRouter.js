const router = require('express').Router();
const SSLCommerzPayment = require('sslcommerz');
const paymentModels = require('../models/PaymentModel')
const { v4: uuidv4 } = require('uuid');


//sslcommerz init
router.post('/init', (req, res) => {
    const data = new paymentModels ({
        total_amount: req.body.carInfo.price,
        currency: 'BDT',
        tran_id: uuidv4(),
        success_url: 'http://localhost:5000/success',
        fail_url: 'http://localhost:5000/fail',
        cancel_url: 'http://localhost:5000/cancel',
        ipn_url: 'http://localhost:5000/ipn',
        shipping_method: 'Courier',
        paymentStatus:'pending',
        product_name: req.body.carInfo.brandName,
        product_imgUrl: req.body.carInfo.imgUrl,
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: req.body.name,
        cus_email: req.body.email,
        cus_img: req.body.imgURL,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: 1000,
        cus_country: 'Bangladesh',
        cus_phone: req.body.number,
        cus_fax: 01711111111,
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    });
    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID,process.env.STORE_PASS,false) //true for live default false for sandbox
    sslcommer.init(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters
        try {
            res.status(201).json(data.GatewayPageURL);
        } catch (error) {
            res.status(500).json(error);
        }
    });
})

router.post("/success", async (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)

})
router.post('/fail', async(req, res)=>{
    res.status(400).json(req.body)
    console.log(req.body)
});
router.post('/cancel', async(req, res)=>{
    console.log(req.body)
    res.status(200).json(req.body)
});

module.exports = router;