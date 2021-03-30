const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')
var bodyParser = require('body-parser')
//serialize the data
//app.use(express.urlencoded)
app.use(bodyParser.urlencoded());
app.get('/', (req, res) => {
    res.render('index', { title: 'Form handling' })
})

app.post('/form_submit', (req, res) => {
    const username = req.body.username
    const email = req.body.email

    res.send(`Your username is ${username} and email is ${email}`)
})

app.listen(PORT, () => (console.log('success')))