//simpifly web server creation (routing tool)
// uses modular middleware pattern where middleware fucntions used to process requests
//functional programming 
//faster restful api
//support MVC architecture 
//work with templeates using pert or egs 

//npm i express
const express = require('express')
const app = express();

app.get('/ping', (req, res) => {
    res.send('pong !!')
})

app.listen(3000, () => {
    console.log("server started on port 3000")
})