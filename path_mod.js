const path = require("path")

file = path.basename('dummy/test.txt') // name of file
console.log(file)

dir_name = path.dirname('dummy/test.txt') //folder name
console.log(dir_name)

dir_name = path.isAbsolute('dummy/test.txt') //retirn true if its a absolute  eg: F:/nodejs/dummy/test.txt
console.log(dir_name)


let dir = 'dummy'
path_name = path.join(dir, 'test.txt')
console.log(path_name)

parse_name = path.parse('dummy/test.txt')
console.log(parse_name) //resulting an object

resolve = path.resolve('dummy/test.txt') //get absolute path
console.log(resolve)

resolve = path.resolve('dummy', 'test.txt') //specify base path
console.log(resolve)