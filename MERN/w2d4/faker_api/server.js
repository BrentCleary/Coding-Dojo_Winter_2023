
// Importing express as a variable
const express = require("express")
const { faker } = require('@faker-js/faker');
const app = express()
const port = 8000



const createUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
}


// Company Object
const createCompany = [
    {_id: faker.datatype.uuid(), 
    name: faker.company.name(), 
    address: 
        [{
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }]
    }]


// Route
// route functions take two Params
// the route, and a callback
// the callback func has the parameters request and response

// Restful routing, all API routes start with api
app.get(`/api`, (request, response) => {
    response.json({ message: 'I really like pizza'})
});

// Create User Route
app.get(`/api/user`, (request, response) => {
    response.json(createUser);
})

// Create Company Route
app.get(`/api/company`, (request, response) => {
    response.json(createCompany);
})

// Create User and Company
app.get(`/api/both`, (request, response) => {
    response.json([createUser, createCompany]);
})


// two params, the port number, and a callback
app.listen(port, () => console.log(`Running express: ${port}`));



// // The import line will look different than what is in Faker's documentation
// // because we are working with an express application

// // we can create a function to return a random / fake "Product"
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    

// const newFakeProduct = createProduct();
// console.log(newFakeProduct);





/*


 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
