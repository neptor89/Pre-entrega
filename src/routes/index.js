const express = require('express')

const cartsRouter = require('./carts/carts.router')
const productsRouter = require('./products/products.router')

const router = express.Router()

router.get('health', (req,res) => {
    res.status(200).json({
        success: true,
        health: 'Up',
        environment: process.env.ENVIRONMENT || 'NOT FOUND'
    })
})

router.use('/carts', cartsRouter)
router.use('/products', productsRouter)