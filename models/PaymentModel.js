const mongoose = require('mongoose');

const paymentModels = new mongoose.Schema({
    total_amount: {
        type: Number
    },
    currency: {
        type: String
    },
    tran_id:{
        type: String
    },
    success_url:{
        type: String
    },
    cancel_url:{
        type: String
    },
    ipn_url:{
        type: String
    },
    shipping_method:{
        type: String
    },
    paymentStatus:{
        type: String
    },

    product_name:{
        type: String
    },
    product_imgUrl:{
        type: String
    },
    product_category:{
        type: String
    },
    product_profile:{
        type: String
    },
    cus_name:{
        type: String
    },
    cus_email:{
        type: String
    },
    cus_img:{
        type: String
    },
    cus_add1:{
        type: String
    },
    cus_add2:{
        type: String
    },
    cus_city:{
        type: String
    },
    cus_state:{
        type: String
    },
    cus_postcode:{
        type: Number
    },
    cus_country:{
        type: String
    },
    cus_phone:{
        type: Number
    },
    cus_fax:{
        type: Number
    },
    ship_name:{
        type: String
    },
    ship_add1:{
        type: String
    },
    ship_add2:{
        type: String
    },
    ship_city:{
        type: String
    },
    ship_state:{
        type: String
    },
    ship_postcode:{
        type: Number
    },
    ship_country:{
        type: String
    },
    multi_card_name:{
        type: String
    },
    value_a:{
        type: String
    },
    value_b:{
        type: String
    },
    value_c:{
        type: String
    },
    value_d:{
        type: String
    },
    val_id:{
        type: String
    },
}, { timeStamps: true });

module.exports = mongoose.model("paymentModels", paymentModels);