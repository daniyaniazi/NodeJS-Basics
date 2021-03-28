// To send request to server and get the response

const http = require('http')

http.get('http://api.open-notify.org/astros.json', resp => {
    let data = ''
    //data event
    resp.on('data', chunk => {
        //concat all data
        data += chunk
    });

    //end event automatically fired
    resp.on('end', () => {
        //json
        data = JSON.parse(data)
        console.log(data)
    })
})