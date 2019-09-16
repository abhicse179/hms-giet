const mongoose = require('mongoose')
const con_uri ="mongodb://localhost:27017/hms"
mongoose.connect(con_uri,{useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log('Mongodb Connection suceeded')
    }
    else
    {
        console.log('Error in DB connection'+err)
    }
})

require('./db.model')
