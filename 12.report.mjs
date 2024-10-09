import { report } from "process"; //report digunakan untuk melakukan report/laporan error yang terjadi 

report.reportOnFatalError = true; //ubah default menjadi true
report.reportOnSignal = true;
report.reportOnUncaughtException = true;
report.filename = "report.json"; // melaporkan dalam bentuk file json 

function sampleError(){
    throw Error("ups"); // uji membuat error
}

sampleError();

// atau bisa juga menggunakan terminal dengan command
// node --report-uncaught-exception --report-on-signal \
// --report-on-fatalerror app.js





