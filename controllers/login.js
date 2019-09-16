const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const path  = require('path')
const Login = mongoose.model('Login')
const bodyParser = require('body-parser')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '../../views/pages/login.html'))
})

router.post('/signin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    let flag = 0

    Login.find((err, result) => {
        if (!err) {
            result.forEach(user => {

                if (user.username == username && user.password==password)

                    flag = 1

            })
            if (flag == 1) {
            
                res.redirect("/home")
            } else {
                res.json('Wrong password')
            }
        } else {
            console.log("Error in getting data from db")
        }
    })
})


module.exports = router 