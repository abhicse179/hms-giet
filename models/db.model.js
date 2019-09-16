const mongoose = require('mongoose')
var loginSchema = new mongoose.Schema({
    
    username:{
        type: String
    },
    password:{
        type:String
    }
}, {collection : 'login'})


mongoose.model('Login', loginSchema)

