const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    

})
module.exports = blogSchema;