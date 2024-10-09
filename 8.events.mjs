import {EventEmitter} from "events"; // library events digunakan untuk mengimplementasikan event listener

const emitter = new EventEmitter();

emitter.addListener("hello", (name)=> { // digunakan untuk menambahkan event, dalam contoh ini adalah hello 
    console.log(`hello ${name}`)
});
emitter.addListener("hello", (name)=> {
    console.log(`hello ${name}`)
});

emitter.emit('hello', 'Eko Khannedy'); // emit digunakan untuk mentrigger event hello, dan menjalankan callback 