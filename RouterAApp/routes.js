const express = require("express")
const route = express.Router();
const users = require('./db')
//GET request
route.get("/users", (req, res) => {
    res.json({ userData: users })
})

//POST 
route.post('/users', (req, res) => {
    const newUser = req.body
    users.push(newUser)
})

route.get('/users/:id', (req, res) => {
    const guserid = Number(req.params.id)
    const getUser = users.find((user) => user.id === guserid)

    if (!getUser) {
        res.status(500).send("User Not Found")
    }

    else {
        res.json({ userData: [getUser] })
    }
})


module.exports = route