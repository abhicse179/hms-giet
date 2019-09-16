const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const path  = require('path')
const bodyParser = require('body-parser')

router.get('/home',(req,res)=>{
    res.render('pages/home')
})

module.exports = router 