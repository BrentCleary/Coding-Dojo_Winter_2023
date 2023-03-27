const mongoose = require('mongoose')

// !Edit
const ProductsSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: [true, 'Name is required' ],
            minLength: [2, 'Name must be at least 2 characters.']
        },
        price: { 
            type: Number,
            required: [true, 'Price is required' ],
            minLength: [1, 'Price must be at least 1 character.']
        }, 
        inStock: { type: Boolean,
            required: [true, 'Please mark is the product is in stock.' ],
        },
        description: { type: String,
            required: [true, 'Description is required' ],
            minLength: [2, 'Description must be at least 2 characters.']
        
        },
        image: { type: String,
            required: [true, 'Must provide an image.' ]
        }
    },
    { timestamps: true }
);

// !Edit
const Products = mongoose.model('Products', ProductsSchema );

// !Edit
module.exports = Products;
