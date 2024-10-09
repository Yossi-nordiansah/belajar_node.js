import path from "path"; //digunakan untuk mendapatkan informasi mengenai path / lokasi suatu file

const file = "/Users/yossi/contoh.txt"

console.info(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
