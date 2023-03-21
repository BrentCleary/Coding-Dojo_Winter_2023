const DishController = require('../controllers/dishes.controller');

module.exports = (app) = => {
    app.get('/api/dishes', DishController.getAll);
}