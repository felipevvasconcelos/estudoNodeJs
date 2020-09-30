'use strict';

const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {type: String, required: true, trim: true},
    price: {type: Number, required: true},
    description: {type: String, required: true, trim: true},
    buyUrl: {type: String, required: false, trim: true},
    status: {type: Boolean, required: true, default: true},
    creationDate: {type: Date, default: Date.now},
}, {versionKey: false});

module.exports = mongoose.model('Product', ProductModel);
