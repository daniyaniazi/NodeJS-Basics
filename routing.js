const http = require('http')

// function index(req, res) {
//     res.writeHead(200); //OK
//     res.end("NODE ROUTING ")
// }

// function about(req, res) {
//     res.writeHead(200); //OK
//     res.end("WELCOME TO ABOUT PAGE ")
// }

// //create server
// http.createServer(function (req, res) {
//     if (req.url == '/') {
//         return index(req, res)
//     }
//     if (req.url == '/about') {
//         return about(req, res)
//     }
// }).listen(8000);


const routes = {
    '/': function index(req, res) {
        res.writeHead(200); //OK
        res.end("NODE ROUTING ")
    },
    '/about': function about(req, res) {
        res.writeHead(200); //OK
        res.end("WELCOME TO ABOUT PAGE ")
    }
}

http.createServer(function (req, res) {
    if (req.url in routes) {
        return routes[req.url](req, res)
    }
}).listen(process.env.PORT || 8000);
