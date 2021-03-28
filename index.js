//Code runer

const date = '25/3/21'
const day = 'Thursday'
console.log('Staring node on %s day is %', date, day)

//Module
const os = require('os')
console.log(os.type())
console.log(os.platform())

const car = require('./sample_module.js')
//console.log(car)
console.log(car.car)

// npm install loadash --save => during runtime 
//npm install uuid --save-dev => only req during development
// npm install loadash -g => install globally
// npm root -g
// npx is a tool that is used to execute pakages
// npm install cowsay
// npx cowsay cowsay node.js is cool
// npm uninstall pakagenname
// npm uninstall  --save-dev uuid
// npm uninstall -D uuid
// npm uninstall -S loadash
// npm uninstall -g loadash