import fs from 'fs';
import zlib from 'zlib';

//zlib digunakan untuk melakukan pengompresan ke file zip

const source = fs.readFileSync("20.zlib.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.mjs.txt", result);

//decompres zip ke file biasa
const buffer = fs.readFileSync("zlib-compress.mjs.txt");
const resultz = zlib.unzipSync(buffer);

console.log(resultz.toString());