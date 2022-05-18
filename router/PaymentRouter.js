const router = require('express').Router();
const SSLCommerzPayment = require('sslcommerz');
const paymentModels = require('../models/PaymentModel')
const { v4: uuidv4 } = require('uuid');


//sslcommerz init
router.post('/init', async (req, res) => {
    const data = new paymentModels({
        total_amount: req.body.carInfo.price,
        currency: 'BDT',
        tran_id: uuidv4(),
        success_url: 'http://localhost:5000/success',
        fail_url: 'http://localhost:5000/fail',
        cancel_url: 'http://localhost:5000/cancel',
        ipn_url: 'http://localhost:5000/ipn',
        shipping_method: 'Courier',
        paymentStatus: 'pending',
        product_name: req.body.carInfo.brandName,
        product_imgUrl: req.body.carInfo.imgUrl,
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: req.body.name,
        cus_email: req.body.email,
        cus_img: req.body.imgURL,
        cus_add1: req.body.carInfo.pickup,
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
    const user = await data.save();
    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false) //true for live default false for sandbox
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
    const filter = { tran_id: req.body.tran_id };
    const update = { val_id: req.body.val_id };
    let order = await paymentModels.findOneAndUpdate(filter, update, {new: true});
    res.status(200).redirect(`http://localhost:3000/paymentsuccess/${req.body.tran_id}`)
    
})
router.post('/fail', async (req, res) => {
    const filter = { tran_id: req.body.tran_id };
    res.status(400).json(req.body)
    let order = await paymentModels.findOneAndDelete(filter, {new: true});
});
router.post('/cancel', async (req, res) => {
    const filter = { tran_id: req.body.tran_id };
    res.status(200).redirect('http://localhost:3000/paymentcancel')
    let order = await paymentModels.findOneAndDelete(filter, {new: true});
});

router.get('/orders/:tran_id', async (req, res) => {
    const id = req.params.tran_id
    let order = await paymentModels.findOne({tran_id:id})
    res.status(200).json(order)
});

router.post('/validate', async (req,res)=>{
    let order = await paymentModels.findOne({tran_id:req.body.tran_id})
    if(order.val_id === req.body.val_id){
        const filter = { tran_id: req.body.tran_id };
        const update = {paymentStatus: 'Successful' };
        let order = await paymentModels.findOneAndUpdate(filter, update, {new: true});
        res.send(order.paymentStatus)
    }
    else {
        return res.status(401).json("Paymnet not done");
      }

})
module.exports = router;