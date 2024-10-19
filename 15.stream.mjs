// Di Node.js, stream adalah konsep yang digunakan untuk membaca atau menulis data sepotong demi sepotong (atau streaming) daripada mencoba membaca atau menulis semuanya sekaligus. Ini sangat berguna ketika bekerja dengan data yang besar, seperti file atau koneksi jaringan.

// Ada empat jenis stream yang umum digunakan di Node.js:

// Readable Streams: Digunakan untuk membaca data dari sumber tertentu, seperti file atau permintaan HTTP.

// Writable Streams: Digunakan untuk menulis data ke tujuan tertentu, seperti file atau respon HTTP.

// Duplex Streams: Menggabungkan Readable dan Writable streams, yang berarti Anda dapat membaca dan menulis ke stream ini.

// Transform Streams: Jenis khusus dari Duplex streams yang memungkinkan Anda mengubah data saat Anda membacanya atau menulisnya, sehingga Anda dapat melakukan transformasi seperti kompresi atau enkripsi.

// Streams memungkinkan Anda untuk memproses data secara efisien dan secara bertahap, mengurangi memori yang diperlukan dan waktu yang dibutuhkan untuk mengirim atau menerima data. Ini membuatnya sangat berguna untuk aplikasi Node.js yang berurusan dengan data besar.

import fs from "fs";

//memnulis stream
const writer = fs.createWriteStream("target_stream.log");

writer.write("hello\n");
writer.write("Yossi\n");
writer.write("Nordiansah\n");

writer.end();

//membaca stream
const reader = fs.createReadStream("target_stream.log");
reader.on("data", (data) => {
    console.info(data.toString());
    console.info("tes");
});

