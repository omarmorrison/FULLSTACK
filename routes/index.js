const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {name: 'Omar'})
    //res.redirect('logins')
})

module.exports = router

