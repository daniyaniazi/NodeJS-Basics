
const axios = require('axios')
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


axios.post('https://reqres.in/api/users', data).then((res) => {
    console.log('status code : ', res.status)
    console.log('bosy : ', JSON.stringify(res.data))
}).catch(err => {
    console.log(err)
})


