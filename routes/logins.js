const express = require('express')
const router = express.Router()
const Author = require('../models/author')
const Login = require('../models/login')


// Login
router.get('/', (req, res) => {
    res.render('logins/index')
})

module.exports = router

