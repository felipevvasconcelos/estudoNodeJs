'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await User.find({status: true});
}

exports.add = async(data) => {
    let user = new User(data);
    let userCreated = await user.save();
    return await userCreated;
}
