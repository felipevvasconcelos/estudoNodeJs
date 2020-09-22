'use-strict'

var PRODUCTS = [
    {'id': 1, 'type': 'tecnologia', 'decription': 'Celular' },
    {'id': 2, 'type': 'tecnologia', 'decription': 'Notebook2' },
];

function getProducts(){
    return PRODUCTS;
}

exports.get = async(req, res, next) => {
    console.log('entrou no controller PRODUTOS');
    res.send(getProducts());
};