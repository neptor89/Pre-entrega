const express = require('express')
const productRouter = require('./src/routes/products/products.routes')
const cartsRouter = require('./src/routes/carts/carts.routes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', productRouter)
app.use('/api', cartsRouter)

module.exports=app