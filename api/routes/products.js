const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save((err => {
        if (err) {console.log(err)}
    }));
    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

//left off at 17:00
router.get('/:productId', (req, res, next) => {
        const id = req.params.productId;
        Product.findById();
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
});

module.exports = router;