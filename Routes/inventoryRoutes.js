const express = require('express');
const authMiddleware = require('../Middlewares/authMiddleware');
const { createInventoryController, getInventoryController } = require('../Controllers/inventoryController');

const router = express.Router()

// Add inventory || POST
router.post('/create-inventory',authMiddleware,createInventoryController)
// Get Blood records || GET
router.get('/get-inventory',authMiddleware,getInventoryController)

module.exports = router