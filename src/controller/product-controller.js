'use-strict'

const repository = require('../repository/product-repository');

exports.getProducts = async(req, res, next) => {
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e
        });
    }
};

exports.AddProduct = async(req, res, next) => {
    try {
        let dbReturnProduct = await repository.add(req.body);
        res.status(200).send(dbReturnProduct);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e
        });
    }
};