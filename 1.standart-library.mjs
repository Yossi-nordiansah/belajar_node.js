import OS from 'os'; //sebelum import library pastikan file memiliki extension mjs

console.log(OS.platform());
console.table(OS.cpus());
console.table(OS.freemem());
console.table(OS.networkInterfaces());
console.table(OS.version());

