require('dotenv').config();
const express = require('express');
// const cors = require

const app = express();
const port = process.env.PORT;

require('./config/mongoos.config');

app.use(express.json(), )