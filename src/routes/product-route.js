const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller');

router.get('/', controller.get);
router.post('/', controller.get);

module.exports = router;