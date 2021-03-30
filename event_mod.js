// Allow us to create and handle custom events 

const events = require("events")

//instance of a class
let ev = new events.EventEmitter();

//create a event
ev.on("MyEvent", function (data) {
    console.log("Perfoming action");
    console.log("DATA :", data)
})

//rasing an event
ev.emit("MyEvent", "My Arguments are here")

//create an events that execute only once
var func = () => {
    console.log("Once Event")
}
ev.once('EventOnce', func)
ev.emit("EventOnce") //only one time
ev.emit("EventOnce") // x

//Unregister an event
ev.off('EventOnce', func)