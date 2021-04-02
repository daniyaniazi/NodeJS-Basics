const express = require("express")
const app = express()
const morgan = require("morgan")
//specify unique id to every req
const { v4: uuidv4 } = require("uuid")
const port = process.env.PORT || 3000
const fs = require('fs')
const path = require('path')

//reg a token
morgan.token('id', function getId(req) {
    return req.id
})
//simple token
morgan.token("param", function (req, res, param) {
    return "userToken:"
})

//store info
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//use middleware
app.use(assignedId)
app.use(morgan(':id :param :method :status :url "HTTP/:http-version" ')) //-> tokens
// combined ,short , tiny , 
app.use(morgan(':id :param :method :status :url "HTTP/:http-version" ', { stream: accessLogStream }))



app.get('/', (req, res) => {
    res.end("app")
})


//assigning a id
function assignedId(req, res, next) {
    req.id = uuidv4();
    next()
}
app.listen(port, () => {
    console.log("SERVER STATRED")
})
//morgan isuseful to store user information