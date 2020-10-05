'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await User.find({status: true});
}

exports.add = async(data) => {
    return await new User(data).save();
}

exports.update = async(id, data) => {
    console.log('chegou no repository');
    return await User.findOneAndUpdate(id, {
        $set:{
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status
        }
    });
}

exports.delete = async(id) => {
    return await User.findByIdAndDelete(id);
}

exports.deleteLogic = async(id) => {
    return await User.findOneAndUpdate(id, {
        $set:{
            status: false
        }
    });
}
