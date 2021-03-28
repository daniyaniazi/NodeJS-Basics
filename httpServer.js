const http = require('http')
const hostname = '127.0.0.1'
const port = 3000;

//Creating server
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": 'text/plain' },)
    //response.statusCode = 200; //OK
    //.setHeader("Content-type", 'text/plain')


    //return data to request
    response.write("Welcome To HTTP Server")
    response.end()
    //-----------------------------
    //response.end("welcome to HTTP server")

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})