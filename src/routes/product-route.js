const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller');

router.get('/', controller.getProducts);
router.post('/', controller.AddProduct);
router.put('/', controller.editProduct);
router.delete('/', controller.deleteProduct);

module.exports = router;