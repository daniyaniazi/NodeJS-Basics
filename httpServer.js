const http = require('http')
const hostname = '127.0.0.1'
const port = 3000;

//Creating server
const server = http.createServer((request, response) => {
    response.statusCode = 200; //OK
    response.setHeader("Content-type", 'text/plain')
    //return data to request
    response.end("welcome to HTTP server")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})