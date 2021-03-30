const fs = require("fs");
// fs.writefile()
// fs.readFile()
// fs.unlink()

// fs.readFileSync()
// fs.writeFileSync()
// fs.unlinkSync

const content = [{
    type: 'Node Application'
}];

fs.writeFileSync("dummy/test.json", JSON.stringify(content))
let content2 = "Node applciation"

//a+ , a , w+ , w , r+ , r (later ...)

fs.writeFile('dummy/test.txt', content2, { flag: 'w' }, err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Successfully Done!")
})

//Delete the file

fs.unlink("dummy/test.json", err => {
    if (err) {
        console.log(err)
    }
    console.log("removed !")
})