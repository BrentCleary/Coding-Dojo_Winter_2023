// !Edit for current database
const Products = require('../models/products.models');

module.exports = {

    // !Edit
    getAllProducts: (req, res) => {
        Products.find()
        .then((allProducts) => {
        res.json({ products: allProducts });
        })
        .catch((err) => 
            res.status(500).json({ message: 'Sorry, there was an issue retrieving the information.', error: err})
        );
    },

    // !Edit
    createOneProduct: (req, res) => {
        // creating a new object
        const newProduct = new Products(req.body)

        newProduct.save()
        .then((newlyCreatedProduct) => {
            res.json({ products: newlyCreatedProduct});
        })
        .catch((err) => 
            res.status(500).json({ message: 'Sorry, there was an issue retrieving the information.', error: err})
        );
    },

    // !Edit
    getOneProduct: (req, res) => {
        Products.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            res.json({ products: oneProduct });
        })
        .catch((err) => 
            res.status(500).json({ message: 'Sorry, there was an issue retrieving the information.', error: err})
        );
    },

    // !Edit
    updateOneProduct: (req, res) => {
        Products.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })
        .then((updatedProduct) => {
            res.json({ products: updatedProduct });
        })
        .catch((err) => 
            res.json({ message: 'Sorry, there was an issue retrieving the information.', error: err})
        );
    },

    // !Edit
    deleteOneProduct: (req, res) => {
        Products.deleteOne({ _id: req.params.id})
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => 
            res.json({ message: 'Sorry, there was an issue retrieving the information.', error: err})
        );
    
    },
};


