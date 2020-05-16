const express = require('express')
const router = express.Router()


// All Authors
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Authors
router.get('/new', (req, res) => {
    res.render('authors/new')
})

module.exports = router

