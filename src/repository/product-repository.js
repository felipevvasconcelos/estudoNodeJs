'use strict';

const mongoose = require('mongoose');
const Product = require('../models/product');
const projection = '_id title price description creationDate';

exports.getAll = async() => {
    return await Product.find({status: true});
}

exports.add = async(data) => {
    return await new Product(data).save();
}

exports.update = async(id, data) => {
    return await Product.findOneAndUpdate(id, {
        $set:{
            user:  data.user,
            title: data.title,
            price: data.price,
            description: data.description,
            buyUrl: data.buyUrl,
            status: data.status,
        }
    });
}

exports.delete = async(id) => {
    return await Product.findByIdAndDelete(id);
}

exports.deleteLogic = async(id) => {
    return await Product.findOneAndUpdate(id, {
        $set:{
            status: false
        }
    });
}