const express = require("express")
const app = express()

const PORT = 3000
const data = {
    id: 1,
    name: "Pakistan"
}
app.get('/', (req, res) => {
    res.end("WELCOME TO HOME")
})

app.get('/about', (req, res) => {
    res.end("WELCOME TO ABOUT")
})

app.get('/weather', (req, res) => {
    //  res.send(data)
    res.json(data)
})

app.get('/files', (req, res) => {
    //  res.send(data)
    res.sendFile("/static/index.html")
})


app.listen(PORT, () => (console.log('success')))