// express is a variable, it can be unicorns

const express = require('express');
const app = express()
const port = 8000

// Routes
// route functions take two params
// the route , and a callback funciton
// the callback function has the parameters, request and response
// req = request, res = response

app.get('api', (req, res) => {

    res.json({ message: 'I really like waffles' });

})