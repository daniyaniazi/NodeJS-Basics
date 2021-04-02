const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require("body-parser")
const session = require("express-session")
const { v4: uuidv4 } = require("uuid")
const router = require('./routes')

const port = process.env.PORT || 3000
app.set('view engine', 'ejs')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//load static
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))




//sessions
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))


//use /router middleware
app.use('/route', router)

//home route
app.get('/', (req, res) => {
    res.render('base', {
        titl: "Login"
    })

})

app.listen(port, () => {
    console.log("SERVER STATRED")
})