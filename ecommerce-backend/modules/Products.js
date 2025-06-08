const mongoose = require('mongoose'); //a mongoDB lib(performs ops like create,read,update...)

const productSchema = new mongoose.Schema({  //sche,a(a structuure each p must follow)
    title: {
        type: String,
        required: true, //rejects any p that doesn't include that field
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    category: String,
    image: String,
});

const Product = mongoose.model('Product', productSchema); 
module.exports = Product;