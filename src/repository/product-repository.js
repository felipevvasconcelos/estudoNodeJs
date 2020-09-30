'use strict';

const mongoose = require('mongoose');
const Product = require('../models/product');
const projection = '_id title price description creationDate';

exports.getAll = async() => {
    return await Product.find({status: true});
}

exports.add = async(data) => {
    let product = new Product(data);
    let productCreated = await product.save();
    return await productCreated;
}