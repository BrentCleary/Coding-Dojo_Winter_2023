// !Edit Name of Controller and file location
const ProductsController = require('../controllers/products.controller')

// !Edit Route Names
// !Edit ControllerFunctions
module.exports = (app) => {
    app.get('/api/products', ProductsController.getAllProducts);
    app.post('/api/products', ProductsController.createOneProduct);
    app.get('/api/products/:id', ProductsController.getOneProduct);
    app.put('/api/products/:id', ProductsController.updateOneProduct);
    app.delete('/api/products/:id', ProductsController.deleteOneProduct);
}