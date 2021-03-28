
// // EventLoop
// const bar = () => console.log("Bar")
// const baz = () => console.log("baz")

// const foo = () => {
//     console.log('foo');
//     bar()
//     baz()
// }
// foo()
// //callstack => foo -> bar -> baz (Queue)


// const foo2 = () => {
//     console.log('foo2');
//     setTimeout(() => {
//         bar()
//     }, 100);
//     baz()
// }
// foo2()

// // Callback
// function getMess(msg, callback) {
//     setTimeout(() => {
//         console.log('GET MESSAGE')
//         callback(msg)
//     }, 1000);

// }
// function DispalyMessage(msg) {
//     console.log(msg)
// }

// getMess('my message', DispalyMessage)

// //Promise -> CALLBACK HELL PROBLEM . complexity
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject(new Error("Errror"))
//     }, 1000);
// })

// promise.then(result => { console.log(result) }, err => console.log(err))

console.log('----------------------------------------')

//ASYN AND AWAIT
//ES 7
//looks like synchronous
function clown() {
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve("++ CLOWN ++")
            }, 2000);
        }
    )
}

function SYNCH() {
    const msg = clown()
    console.log("Message", msg)
}

SYNCH()
console.log('----------------------------------------')
async function ASYNCH(callback) {
    const msg = await clown()
    console.log("Message", msg)
    callback()
}
ASYNCH(afterpromise)
console.log('----------------------------------------')

function afterpromise() {
    console.log("Execute After")
}