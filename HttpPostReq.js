//POST request
//many ways

const http = require('https') //https - ssl issue
const data = JSON.stringify({
    name: "jhon",
    job: "Content writer"
})

//options
const options = {
    hostname: 'reqres.in',
    path: '/api/users/',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
}
//request
const req = http.request(options, (res) => {
    let body = '';
    console.log("Status Code:", res.statusCode)

    res.on('data', (chunk) => {
        body += chunk
    })

    res.on('end', () => {
        console.log('Body :', JSON.parse(body))
    })
})
//sending data

req.write(data)
req.end()

//npm i -S axios