'use-strict'

const repository = require('../repository/product-repository');

exports.getProducts = async(req, res, next) => {
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e.message
        });
    }
};

exports.AddProduct = async(req, res, next) => {
    try {
        let dbReturnProduct = await repository.add(req.body);
        res.status(200).send(dbReturnProduct);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e.message
        });
    }
};

exports.deleteProduct = async(req, res, next) => {
    try {
        await repository.deleteLogic(req.params.id);
        res.status(200).send({
            message: 'Product deleted'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e.message
        });
    }
};

exports.editProduct = async(req, res, next) => {
    try {
        let dbReturn = await repository.update(req.params.id, req.body);
        res.status(202).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Ops! Something went wrong.', error: e.message
        });
    }
};