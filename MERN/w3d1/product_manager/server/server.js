require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT;
    
require("./config/mongoose.config");
    
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// !Edit for correct Database
const AllMyProductsRoutes = require("./routes/products.routes");
AllMyProductsRoutes(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );
