//small data on a client side ans sent to the clie t along with server request
//mianytaining user sessions

//track user activity 
//npm i cookie-parser


const express = require("express")
const app = express()
const cookies = require('cookie-parser')
const PORT = process.env.PORT || 3000

app.use(cookies())
let data = {
    name: "Daniya",
    age: "20"
}


app.get("/", (req, res) => {
    console.log("cookies")
    res.end("cookies")
})

app.get('/setuser', (req, res) => {
    req.cookies.userData = data
    res.send("User Data added to cookies")
})

app.get('/getuser', (req, res) => {
    res.send(req.cookies)
    console.log(req.cookies);
})

//destroy cookie

app.get('/clearcookie', (req, res) => {
    res.clearCookie('userData')
    res.send("user got logged out")
})


app.listen(PORT, () => {
    console.log("server is started at port 3000")
})
