const express = require('express');
const { registerController, loginController, currentUserController } = require('../Controllers/authController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();

//routes
// register || POST
router.post('/register', registerController)
// login || POST
router.post('/login', loginController)
// current-user || GET
router.get('/current-user', authMiddleware, currentUserController)

module.exports = router