//versi callback
setInterval(()=>{console.log(new Date())},1000);


//versi promise
import timers from "timers/promises";
const name = await timers.setTimeout(5000, "Eko"); 
console.log(new Date());
console.log(name);