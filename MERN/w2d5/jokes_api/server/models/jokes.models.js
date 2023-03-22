// const jokes = [
//     {setup: '',  punchline: ''},
//     {setup: "Where do programmers hang out?", punchline : "The Foo Bar"},
//     {setup: "A SQL query walks into a bar, walks up to two tables and asks...?", punchline : "Can I join you?"},
//     {setup: "What kind of music do planets listen to?", punchline : "Nep-tunes"},
//     {setup: "How does a programmer cheer up a tree?", punchline : "They console.log"}
// ];

const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({

    setup: { type: String
    },
    punchline: {type: String
    }
});

const Jokes = mongoose.model('Jokes', JokesSchema );

module.exports = Jokes;
