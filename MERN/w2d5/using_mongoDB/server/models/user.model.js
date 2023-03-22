const mongoose = require('mongoose');

// Create a Schema for Users
const UserSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
    }, { timestamps: true })

    // create a constructor function for our model and store in variable 'User'
const User = mongoose.model('User', UserSchema);

// ...retrieve an array of all documents in the User collection
User.find()
    .then(users => {
        // logic with users results
    })
    .catch(err => res.json(err));


// ...retrieve an array of documents matching the query object criteria
User.find({name:'Jessica'}) 
.then(usersNamedJessica => {
    // logic with usersNamedJessica results
})
.catch(err => res.json(err));


// ...retrieve 1 document (the first record found) matching the query object criteria
User.findOne({_id: '5d34d361db64c9267ed91f73'})
    .then(user => {
        // logic with single user object result
    })
    .catch(err => res.json(err));






module.exports = User;