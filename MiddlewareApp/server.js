const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
const port = process.env.PORT || 3000
app.set('view engine', 'ejs')


app.use(function (req, res, next) {
    console.log("Request Date : " + new Date())
    //res.send("welcome")
    next()
})

app.use(function (req, res, next) {
    var filepath = path.join(__dirname, 'static', req.url)

    fs.stat(filepath, function (err, fileinfo) {
        if (err) {
            next()
            return
        }
        if (fileinfo.isFile()) {
            res.sendFile(filepath)
        } else {
            next()
        }
    })
})

app.listen(port, () => {
    console.log("SERVER STATRED")
})