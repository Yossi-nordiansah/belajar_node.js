import process from "process";
import readline from "readline"; //digunakan untuk membaca input dari terminal

const rl = readline.createInterface({
    input: process.stdin, //input berasal dari terminal(stdin)
    output: process.stdout // output akan dikeluarkan di terminal(stdout)
});

rl.question("siapan nama anda? : ", //input.question untuk melakukan pertanyaan di terminal 
    (nama)=>{ //kemudian mengembalikan callback (nama)
    console.info(`hello ${nama}`);
    rl.close();
});

//jalankan node <nama file>