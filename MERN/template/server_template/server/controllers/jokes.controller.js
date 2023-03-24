// !Edit for current database
const Jokes = require('../models/jokes.models');

module.exports = {

    // !Edit
    getAllJokes: (req, res) => {
        Jokes.find()
        .then((allJokes) => {
        res.json({ jokes: allJokes });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },

    // !Edit
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

    // !Edit
    getOneJoke: (req, res) => {
        Jokes.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ jokes: oneJoke });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },

    // !Edit
    updateOneJoke: (req, res) => {
        Jokes.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })
        .then((updatedJoke) => {
            res.json({ jokes: updatedJoke });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    },

    // !Edit
    deleteOneJoke: (req, res) => {
        Jokes.deleteOne({ _id: req.params.id})
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => 
            res.json({ message: 'Heyyyyyyyy....... Not funny.', error: err})
        );
    
    },
};


