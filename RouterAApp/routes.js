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
    res.send(newUser)
    console.log(users)
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


//PUT
route.put('/users/:id', (req, res) => {
    const guserid = Number(req.params.id)
    const body = req.body
    const user = users.find((user) => user.id === guserid)
    const index = users.indexOf(user)

    if (!index) {
        res.status(500).send("User Not Found")
    }
    else {
        const updatedusers = { ...user, ...body }
        users[index] = updatedusers
        console.log({ ...user, ...body })
        res.send(updatedusers)
    }
})


//DELETE
route.delete('/users/:id', (req, res) => {

    const guserid = Number(req.params.id)
    const newUsers = users.filter((user) => (user.id != guserid))

    if (!newUsers) {
        res.status(500).send("User Not Found")
    } else {
        nusers = newUsers
        res.send(nusers)
    }

})

module.exports = route