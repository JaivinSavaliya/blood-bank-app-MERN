const express = require('express');
const { registerController } = require('../Controllers/authController');

const router = express.Router();

//routes
// register || POST
router.post('/register',registerController)
// login || POST
router.post('/login',)

module.exports = router