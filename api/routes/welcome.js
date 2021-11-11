const express = require('express');
const router = express.Router();
const welcomeController = require('../controllers/welcome');

router.get('/', welcomeController.index);

router.get('/:id', welcomeController.show);

module.exports = router;