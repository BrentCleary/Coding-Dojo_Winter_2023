const Jokes = require('../models/jokes.models');

module.exports = {
    
    getAllJokes: (req, res) => {
        Jokes.find()
        .then((allJokes) => {
        res.json({ jokes: allJokes });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },

    createOneJoke: (req, res) => {
        // creating a new object
        const newJoke = new Jokes(req.body)

        newJoke.save()
        .then((newlyCreatedJoke) => {
            res.json({ jokes: newlyCreatedJoke});
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },



    getOneJoke: (req, res) => {
        Jokes.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ jokes: oneJoke });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },



    updateOneJoke: (req, res) => {
        Jokes.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })
        .then((updatedJoke) => {
            res.json({ jokes: updatedJoke });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },



    deleteOneJoke: (req, res) => {
        Jokes.deleteOne({ _id: req.params.id})
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
        res.json({ status: 'ok' });
    
    },
};


