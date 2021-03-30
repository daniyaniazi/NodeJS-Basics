// Functins that have access to the reaquest and respinse object
//req response cycle
// function in exress router wioch when invoke executes the middleware succeding the current middleware

//LOGIN FUNCTION - MIDDLEWARE TO AUTHENTICATE - ROUTE

const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
    console.log("logged");
    next() //invoke the next middleware function
}

const reqTime = function (req, res, next) {
    req.requestTime = Date.now()
    next() //invoke the next middleware function
}
app.use(express.static('public')) //static files <img  src='/img.jpg" /> 

//VIRTUAL PATH
app.use('public', express.static('css')) // <img  src='public/img.jpg" /> 

//avoid harcoded vals
const path = require("path")
const public_path = path.resolve(__dirname, 'public')

app.use(myLogger) // load middleware func
app.use(reqTime)

app.get('/', (req, res) => {
    res.send(`Current Time  ${req.requestTime}`)
})
app.listen(3000, () => {
    console.log("server started on port 3000")
})

//Middlewares that are loaded first are executed first
//callstack of middleware
