function samplePromise(){
    return Promise.resolve("eko");
};

const name = await samplePromise(); //pada module (mjs), await tidak harus masuk ke async function karena mjs sudah async
console.log(name)