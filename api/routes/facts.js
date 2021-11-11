const express = require('express');
const router = express.Router();
const factController = require('../controllers/facts');

router.get('/', factController.index);

router.get('/:id', factController.show);

module.exports = router;