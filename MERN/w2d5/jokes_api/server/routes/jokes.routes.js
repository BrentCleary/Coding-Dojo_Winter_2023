const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.post('/api/jokes', JokesController.createOneJoke);
    app.get('/api/jokes/:id', JokesController.getOneJoke);
    app.put('/api/jokes/:id', JokesController.updateOneJoke);
    app.delete('/api/jokes/:id', JokesController.deleteOneJoke);
}