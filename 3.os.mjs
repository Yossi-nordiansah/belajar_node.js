import OS from 'os'; //library os berfungsi untuk mendapatkan informasi tentang os yang digunakan

console.log(OS.platform());
console.table(OS.cpus());
console.table(OS.freemem());
console.table(OS.networkInterfaces());
console.table(OS.version());

