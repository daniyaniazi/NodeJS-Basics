const fs = require("fs");

//ASYNC
fs.readFile('dummy/test.txt', (error, data) => {
    if (error) {
        throw error
    };

    console.log(data)
})
fs.readFile('dummy/test.txt', 'utf8', (error, data) => {
    if (error) {
        throw error
    };
    console.log('utf')
    console.log(data)
})

//SYNC
const data = fs.readFileSync('dummy/test.txt', { encoding: 'utf8', flag: 'r' }); //r => read
console.log(data)


//check file status
fs.stat('dummy/test.txt', (err, status) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(status.isFile())
    console.log(status.isDirectory())
    console.log(status.isSymbolicLink())
    console.log(status.size) //property
})