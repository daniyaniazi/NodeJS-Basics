
const express = require("express")
var router = express.Router()


const credential = {
    email: "admin@gmail.com",
    password: "admin"
}


//login user
router.post('/login', (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email
        res.redirect('/route/dashboard')

    }
    else {
        res.end("INVALID USER CRENTIALS")
    }
})

//dashboard

router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user })
    }
    else {
        res.send("Unauthorized User")
    }
})


//logout
router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.render('base', {
                title: "Login",
                logout: "logout successfully"
            })
        }

    })
})

module.exports = router