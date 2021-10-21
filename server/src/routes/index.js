const express = require('express')
const router = express.Router()
const todo = require('./todo')

router.use('/todos', todo)

module.exports = router