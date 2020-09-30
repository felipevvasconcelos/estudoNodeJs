'use strict'

const repository = require('../repository/user-repository');

exports.getUsers = async(req, res, next) => {
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
        let dbReturnUser = await repository.add(req.body);
        res.status(200).send(dbReturnUser);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e
        });
    }
};
