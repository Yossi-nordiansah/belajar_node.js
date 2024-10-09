// buffer juga mendukung encoding seperti hex, base64, base64url

const buffer = Buffer.from("Yossi Nordiansah", "utf8");

console.log(buffer.toString()) // encoding ke default (utf8)
console.log(buffer.toString("hex")) // encoding ke hex
console.log(buffer.toString("base64")) // encoding ke base64

const bufferBase64 = Buffer.from("WW9zc2kgTm9yZGlhbnNhaA==", "base64") // contoh decode dari base 64 to string utf8
console.log(bufferBase64.toString("utf8"));

