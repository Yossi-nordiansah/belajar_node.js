// buffer digunakan untuk manangani data binner

const bufferName = Buffer.from("Yossi Nordiansah"); //konversi string ke bentuk buffer

console.log(bufferName);
const reverseBuffer = bufferName.reverse(); // mer reverse bentuk buffer

console.log(reverseBuffer.toString()) // konversi dari buffer ke string