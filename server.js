require('./models/db')

const express = require('express')
const path = require('path')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
var loginController = require('./controllers/login')
var homeController = require('./controllers/home')

var app = express()
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static(path.join(__dirname+"/views/res/")))
app.use(express.static(path.join(__dirname+"/views/")))

app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exhbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layout/'}))
app.set('view engine','hbs')


app.listen(port,()=>{
console.log('Express server started at port['+port+']')
})

app.use('/',loginController)
app.use('/',homeController)