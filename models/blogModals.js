const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    picture: Object,
    image: String,
    title: String,
    details: String,
    

})
module.exports = blogSchema;