//track user activity 
const express = require("express")
const session = require("express-session")
const app = express()
const PORT = process.env.PORT || 3000

//use session as middleware
app.use(session({
    secret: "your secret key",
    resave: true, //force the session to be save
    saveUninitialized: true //force a uninitialized session to be save and stores
}))

//creating routes
app.get("/", (req, res) => {
    req.session.name = "jhon" //set session name

    return res.send("session set")
})

app.get("/session", (req, res) => {
    var name = req.session.name
    console.log(req.session)
    return res.send(name)

}
)

app.listen(PORT, () => {
    console.log("server is started at port 3000")
})

//destroy session
app.get('/destroy', (req, res) => {
    req.session.destroy(function (error) {
        console.log("Session Destroyed")
    })
    res.end()
})