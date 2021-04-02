const express = require("express")
const route = require("./routes")
const app = express()
const router = require('./routes')
//body parser allow us to parse the data to a body
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

//use 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use('/api', route)
app.get('/', (req, res) => {
    res.end("app")
})


app.listen(port, () => {
    console.log("SERVER STATRED")
})