const mongoose = require('mongoose')

// !Edit
const JokesSchema = new mongoose.Schema({

    setup: { type: String },
    punchline: {type: String }

});

// !Edit
const Jokes = mongoose.model('Jokes', JokesSchema );

// !Edit
module.exports = Jokes;
