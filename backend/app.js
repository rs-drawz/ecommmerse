const express = require('express')
const cors = require("cors")
const app = express();
app.use(express.json());
const errorMiddleware = require('./middleware/error')
const cookieparser = require('cookie-parser')
const path = require('path')
const products = require('./routes/products')
const auth = require('./routes/auth');
const order = require('./routes/order');


app.use(`/uploads`,express.static(path.join(__dirname,'uploads')))

app.use(express.json());
app.use(cookieparser());
app.use(`/api/v1/`, products)
app.use(`/api/v1/`, auth)
app.use(`/api/v1/`, order)

app.use(errorMiddleware)
app.use(cors());
module.exports = app; 