const mongoose = require('mongoose')

// !Edit
const ProductsSchema = new mongoose.Schema({

    name: { type: String },
    price: { type: Number }, 
    inStock: { type: Boolean },
    description: { type: String },
    image: { type: String }

});

// !Edit
const Products = mongoose.model('Products', ProductsSchema );

// !Edit
module.exports = Products;
