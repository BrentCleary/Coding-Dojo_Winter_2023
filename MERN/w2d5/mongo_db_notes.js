// MongoDB

/*
Databses are a - Schema
- A group of collections

We will be using a cloud option
*/

/// ========= Basic MongoDB Terminal Commands ============

show dbs // Show's all databases with data inside them

db // shows database you are using

use db // will switch the database you are using

show collections // will show collections

db.createCollection("animals") // will create a database called "animals"


// ================== Mongo DB CRUD ======================


/// Create - will insert the below into the active database
db.animals.insertOne({species: 'Sarcastic Fringehead', name: "Jonathan", habitat: 'fishtank'})


// Find - Will return all information inside the db in the animals collections
db.animals.find()

// ------ Create Multiple Entries----------- //
db.animals.insertOne({species: 'Pink Fatmucket', name: "George", habitat: 'Under Da Sea'})
db.animals.insertOne({species: 'Kangaroo', name: "Kangaroo Jack", habitat: 'Down Unda'})
db.animals.insertOne({species: 'Mountain Chicken', name: "Sandra", habitat: 'In a Tree'})


// Update - 

db.animals.update({_id: ObjectID, ... other information (This is not correct syntax, you must type it out.)})

// Delete

mongo-demo> db.animals.deleteOne({_id: ObjectID("****)"), name: ******})
