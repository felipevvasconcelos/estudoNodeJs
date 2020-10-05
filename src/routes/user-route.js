const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');

router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.put('/', controller.editUser);
router.delete('/', controller.deleteUser);

module.exports = router;
