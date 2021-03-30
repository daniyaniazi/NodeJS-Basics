// Network communication and information exchange in an efficient way
// read and write files
// read from memory from start to finish //traditional
// donot need to load large data - read chunk by chunk 


const http = require('http')
const fs = require('fs')

// http.createServer(function (req, res) {
//     fs.readFile('dummy/test.txt', (err, data) => {
//         res.end(data)
//     }) //read the full content then respond

// }).listen(process.env.PORT || 8000, () => (console.log("SERVER STARTED")));

//WITH STREAMS

http.createServer(function (req, res) {

    const stream = fs.createReadStream('dummy/test.txt')
    stream.pipe(res); //adding in response
    //adding chunk 

}).listen(process.env.PORT || 8000, () => (console.log("SERVER STARTED")));