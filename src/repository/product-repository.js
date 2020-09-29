'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('product');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await Product.find({status: true});
}

exports.create = async(data) => {
    let product = new Product(data);
    let productCreated = await product.save();
    return await productCreated;
}