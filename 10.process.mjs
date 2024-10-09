import process from 'process'; //library process digunakan untuk mendapatkan informasi proses NodeJS yang sedang berjalan

process.addListener('exit', (exitcode)=>{
    console.log(exitcode)
});

// console.log(process.version);
// console.table(process.argv);
// console.table(process.report);
// console.table(process.env);

process.exit(19);
