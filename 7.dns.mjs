import dns from "dns/promises"; // library ini digunakan untuk berinteraksi dengan dns (domain name server)

const addres = await dns.lookup('www.siakad.unim.ac.id'); // contoh untuk mendapatkan ip 

console.log(addres.address);
console.log(addres.family);
