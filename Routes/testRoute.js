const express = require('express');
const {testControl} = require('../Controllers/testControl')

const router = express.Router()

router.get('/', testControl)

module.exports = router