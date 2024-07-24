const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const {verifyToken} = require('../middleware/auth.Middleware');

// router.get('/data', verifyToken, apiController.getData);

module.exports = router;