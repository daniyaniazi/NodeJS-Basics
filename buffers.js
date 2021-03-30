//deals with binary data

const buf = Buffer.from('Hey');
console.log(buf)
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])
console.log(buf.toString())

//WRITING TO A BUFFER
const buf2 = Buffer.alloc(4) //allocate locs
buf2.write("hEY2");
console.log(buf2)
console.log(buf2.toString())

buf[1] = 111 //o
console.log(buf.toString())

