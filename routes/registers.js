const express = require('express')
const router = express.Router()
const Author = require('../models/author')
const Register = require('../models/register')


// Register
router.get('/', (req, res) => {
    res.render('registers/index')
})

module.exports = router

