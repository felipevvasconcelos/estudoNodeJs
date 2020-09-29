'use strict'
const repository = require('../repository/user-repository');
// var USERS = [
//     {'id': 1, 'username': 'felipe', 'password': '123456'},
//     {'id': 2, 'username': 'leticia', 'password': '123456'},
// ];

exports.get = async(req, res, next) => {
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e
        });
    }
};

exports.addUser = async(req, res, next) => {
    try {
        let dbReturnUser = await repository.create(req.body);
        res.status(200).send(dbReturnUser);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e
        });
    }
};
