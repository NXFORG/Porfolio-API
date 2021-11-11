const express = require('express');
const router = express.Router();
const githubController = require('../controllers/github');

router.get('/:name', githubController.show);

module.exports = router;