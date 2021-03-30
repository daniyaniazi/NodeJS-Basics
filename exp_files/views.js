//ejs
//handlebars
//pug

const express = require("express")
const app = express()

const PORT = 3000
//npm i pug

app.set('view engine', 'pug')
//views is the default directory of template engine to change :
// app.set('views','./views')

app.get('/', function (res, res) {
    res.render('index', { title: 'Express View Engine', h1: 'Express Application ', para: 'Express Template Engine - PUG' })
}).listen(PORT, () => console.log("SERVER IS RUNNING"))